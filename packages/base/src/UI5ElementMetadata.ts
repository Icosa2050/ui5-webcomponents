import DataType from "./types/DataType.js";
import { camelToKebabCase } from "./util/StringHelper.js";
import { getSlottedNodes } from "./util/SlotsHelper.js";
import { getEffectiveScopingSuffixForTag } from "./CustomElementsScopeUtils.js";

type SlotInvalidation = {
	properties: boolean | Array<string>,
	slots: boolean | Array<string>,
}

type Slot = {
	type: typeof Node | typeof HTMLElement,
	default?: boolean,
	updatesFormValue?: boolean,
	propertyName?: string,
	individualSlots?: boolean,
	invalidateOnChildChange?: boolean | SlotInvalidation,
	cloned?: boolean,
};

type SlotValue = Node;

type Property = {
	type?: BooleanConstructor | StringConstructor | ObjectConstructor | DataType
	validator?: DataType,
	defaultValue?: PropertyValue,
	updatesFormValue?: boolean,
	noAttribute?: boolean,
	multiple?: boolean,
	compareValues?: boolean,
}

type PropertyValue = boolean | number | string | object | undefined | null | DataType;

type EventData = Record<string, object>;

type Metadata = {
	tag?: string,
	managedSlots?: boolean,
	properties?: Record<string, Property>,
	slots?: Record<string, Slot>,
	events?: EventData,
	fastNavigation?: boolean,
	themeAware?: boolean,
	languageAware?: boolean,
	formAssociated?: boolean,
	shadowRootOptions?: Partial<ShadowRootInit>
};

type State = Record<string, PropertyValue | Array<SlotValue>>;

/**
 * @class
 * @public
 */
class UI5ElementMetadata {
	metadata: Metadata;
	_initialState: State | undefined;

	constructor(metadata: Metadata) {
		this.metadata = metadata;
	}

	getInitialState() {
		if (Object.prototype.hasOwnProperty.call(this, "_initialState")) {
			return this._initialState!;
		}
		const initialState: State = {};
		const slotsAreManaged = this.slotsAreManaged();

		// Initialize properties
		const props = this.getProperties();
		for (const propName in props) { // eslint-disable-line
			const propType = props[propName].type;
			const propDefaultValue = props[propName].defaultValue;

			if (propType === Boolean) {
				initialState[propName] = false;

				if (propDefaultValue !== undefined) {
					console.warn("The 'defaultValue' metadata key is ignored for all booleans properties, they would be initialized with 'false' by default"); // eslint-disable-line
				}
			} else if (props[propName].multiple) {
				Object.defineProperty(initialState, propName, {
					enumerable: true,
					get() {
					  return [];
					},
				  });
			} else if (propType === Object) {
				Object.defineProperty(initialState, propName, {
					enumerable: true,
					get() {
					  return "defaultValue" in props[propName] ? props[propName].defaultValue : {};
					},
				  });
			} else if (propType === String) {
				initialState[propName] = "defaultValue" in props[propName] ? props[propName].defaultValue : "";
			} else {
				initialState[propName] = propDefaultValue;
			}
		}

		// Initialize slots
		if (slotsAreManaged) {
			const slots = this.getSlots();
			for (const [slotName, slotData] of Object.entries<Slot>(slots)) { // eslint-disable-line
				const propertyName = slotData.propertyName || slotName;
				initialState[propertyName] = [];
			}
		}

		this._initialState = initialState;
		return initialState;
	}

	/**
	 * Validates the property's value and returns it if correct
	 * or returns the default value if not.
	 * **Note:** Only intended for use by UI5Element.js
	 * @public
	 */
	static validatePropertyValue(value: PropertyValue, propData: Property): PropertyValue {
		const isMultiple = propData.multiple;
		if (isMultiple && value) {
			return (value as Array<PropertyValue>).map((propValue: PropertyValue) => validateSingleProperty(propValue, propData));
		}
		return validateSingleProperty(value, propData);
	}

	/**
	 * Validates the slot's value and returns it if correct
	 * or throws an exception if not.
	 * **Note:** Only intended for use by UI5Element.js
	 * @public
	 */
	static validateSlotValue(value: Node, slotData: Slot): Node {
		return validateSingleSlot(value, slotData);
	}

	/**
	 * Returns the tag of the UI5 Element without the scope
	 * @public
	 */
	getPureTag(): string {
		return this.metadata.tag || "";
	}

	/**
	 * Returns the tag of the UI5 Element
	 * @public
	 */
	getTag(): string {
		const pureTag = this.metadata.tag;

		if (!pureTag) {
			return "";
		}

		const suffix = getEffectiveScopingSuffixForTag(pureTag);
		if (!suffix) {
			return pureTag;
		}

		return `${pureTag}-${suffix}`;
	}

	/**
	 * Determines whether a property should have an attribute counterpart
	 * @public
	 * @param propName
	 */
	hasAttribute(propName: string): boolean {
		const propData = this.getProperties()[propName];
		return propData.type !== Object && !propData.noAttribute && !propData.multiple;
	}

	/**
	 * Returns an array with the properties of the UI5 Element (in camelCase)
	 * @public
	 */
	getPropertiesList(): Array<string> {
		return Object.keys(this.getProperties());
	}

	/**
	 * Returns an array with the attributes of the UI5 Element (in kebab-case)
	 * @public
	 */
	getAttributesList(): Array<string> {
		return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(camelToKebabCase);
	}

	/**
	 * Determines whether this UI5 Element has a default slot of type Node, therefore can slot text
	 */
	canSlotText() {
		return (this.getSlots().default)?.type === Node;
	}

	/**
	 * Determines whether this UI5 Element supports any slots
	 * @public
	 */
	hasSlots(): boolean {
		return !!Object.entries(this.getSlots()).length;
	}

	/**
	 * Determines whether this UI5 Element supports any slots with "individualSlots: true"
	 * @public
	 */
	hasIndividualSlots(): boolean {
		return this.slotsAreManaged() && Object.values(this.getSlots()).some(slotData => slotData.individualSlots);
	}

	/**
	 * Determines whether this UI5 Element needs to invalidate if children are added/removed/changed
	 * @public
	 */
	slotsAreManaged(): boolean {
		return !!this.metadata.managedSlots;
	}

	/**
	 * Determines whether this control supports F6 fast navigation
	 * @public
	 */
	supportsF6FastNavigation(): boolean {
		return !!this.metadata.fastNavigation;
	}

	/**
	 * Returns an object with key-value pairs of properties and their metadata definitions
	 * @public
	 */
	getProperties(): Record<string, Property> {
		if (!this.metadata.properties) {
			this.metadata.properties = {};
		}
		return this.metadata.properties;
	}

	/**
	 * Returns an object with key-value pairs of events and their metadata definitions
	 * @public
	 */
	getEvents(): EventData {
		if (!this.metadata.events) {
			this.metadata.events = {};
		}
		return this.metadata.events;
	}

	/**
	 * Returns an object with key-value pairs of slots and their metadata definitions
	 * @public
	 */
	 getSlots(): Record<string, Slot> {
		if (!this.metadata.slots) {
			this.metadata.slots = {};
		}
		return this.metadata.slots;
	}

	/**
	 * Determines whether this UI5 Element has any translatable texts (needs to be invalidated upon language change)
	 */
	isLanguageAware(): boolean {
		return !!this.metadata.languageAware;
	}

	/**
	 * Determines whether this UI5 Element has any theme dependant carachteristics.
	 */
	 isThemeAware(): boolean {
		return !!this.metadata.themeAware;
	}

	getShadowRootOptions(): Partial<ShadowRootInit> {
		return this.metadata.shadowRootOptions || {};
	}

	/**
	 * Determines whether this UI5 Element has any theme dependant carachteristics.
	 */
	 isFormAssociated(): boolean {
		return !!this.metadata.formAssociated;
	}

	/**
	 * Matches a changed entity (property/slot) with the given name against the "invalidateOnChildChange" configuration
	 * and determines whether this should cause and invalidation
	 *
	 * @param slotName the name of the slot in which a child was changed
	 * @param type the type of change in the child: "property" or "slot"
	 * @param name the name of the property/slot that changed
	 */
	shouldInvalidateOnChildChange(slotName: string, type: "property" | "slot", name: string): boolean {
		const config = this.getSlots()[slotName].invalidateOnChildChange;

		// invalidateOnChildChange was not set in the slot metadata - by default child changes do not affect the component
		if (config === undefined) {
			return false;
		}

		// The simple format was used: invalidateOnChildChange: true/false;
		if (typeof config === "boolean") {
			return config;
		}

		// The complex format was used: invalidateOnChildChange: { properties, slots }
		if (typeof config === "object") {
			// A property was changed
			if (type === "property") {
				// The config object does not have a properties field
				if (config.properties === undefined) {
					return false;
				}

				// The config object has the short format: properties: true/false
				if (typeof config.properties === "boolean") {
					return config.properties;
				}

				// The config object has the complex format: properties: [...]
				if (Array.isArray(config.properties)) {
					return config.properties.includes(name);
				}

				throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected");
			}

			// A slot was changed
			if (type === "slot") {
				// The config object does not have a slots field
				if (config.slots === undefined) {
					return false;
				}

				// The config object has the short format: slots: true/false
				if (typeof config.slots === "boolean") {
					return config.slots;
				}

				// The config object has the complex format: slots: [...]
				if (Array.isArray(config.slots)) {
					return config.slots.includes(name);
				}

				throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected");
			}
		}

		throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected");
	}
}

const validateSingleProperty = (value: PropertyValue, propData: Property) => {
	const propertyType = propData.type;
	let propertyValidator = propData.validator;

	if (propertyType && (propertyType as typeof DataType).isDataTypeClass) {
		propertyValidator = propertyType as typeof DataType;
	}

	if (propertyValidator) {
		return (propertyValidator as typeof DataType).isValid(value) ? value : propData.defaultValue;
	}

	if (!propertyType || propertyType === String) {
		// eslint-disable-next-line @typescript-eslint/no-base-to-string -- if an object is passed as a value to a string property, this was an error so displaying [object Object] will indicate the issue to the developer
		return (typeof value === "string" || typeof value === "undefined" || value === null) ? value : value.toString();
	}

	if (propertyType === Boolean) {
		return typeof value === "boolean" ? value : false;
	}

	if (propertyType === Object) {
		return typeof value === "object" ? value : propData.defaultValue;
	}

	// Check if "value" is part of the enum (propertyType) values and return the defaultValue if not found.
	return value as string in propertyType ? value : propData.defaultValue;
};

const validateSingleSlot = (value: Node, slotData: Slot) => {
	value && getSlottedNodes(value).forEach(el => {
		if (!(el instanceof slotData.type)) {
			throw new Error(`The element is not of type ${slotData.type.toString()}`);
		}
	});

	return value;
};

export default UI5ElementMetadata;
export type {
	Property,
	PropertyValue,
	Slot,
	SlotValue,
	EventData,
	State,
	Metadata,
};
