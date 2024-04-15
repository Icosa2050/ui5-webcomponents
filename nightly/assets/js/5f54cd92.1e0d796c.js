"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3653],{7068:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>h,metadata:()=>x,toc:()=>v});var n=i(1085),s=i(1184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 500px">\n    \x3c!-- playground-fold-end --\x3e\n\n    \x3c!-- <div style="height: 700px;"> --\x3e\n    <ui5-wizard id="wiz">\n        <ui5-wizard-step icon="product" title-text="Product type" selected="">\n            <div style="display: flex; min-height: 200px; flex-direction: column;">\n                <ui5-title>1. Product Type</ui5-title><br />\n                <ui5-message-strip>\n                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to\n                    work with.\n                </ui5-message-strip><br />\n                <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus\n                    sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat\n                    diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor\n                    lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim\n                    quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget\n                    facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras\n                    faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor\n                    et, varius quam. Aliquam erat volutpat.\n                </ui5-label>\n            </div>\n            <ui5-button id="wiz-toStep2" design="Emphasized">Step 2</ui5-button>\n        </ui5-wizard-step>\n        <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">\n            <div style="display: flex;flex-direction: column">\n                <ui5-title>2. Product Information</ui5-title><br />\n                <ui5-label wrapping-type="Normal">\n                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.\n                    Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet\n                    dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a\n                    turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer\n                    pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.\n                    Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\n                </ui5-label>\n                <div style="display: flex; flex-direction: column;">\n                    <div\n                        style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">\n                        <ui5-label>Name</ui5-label>\n                        <ui5-input placeholder="product name..."></ui5-input>\n                    </div>\n                    <div\n                        style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                        <ui5-label>Weight</ui5-label>\n                        <ui5-input value="3.65"></ui5-input>\n                    </div>\n                    <div\n                        style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                        <ui5-label>Manifacturer</ui5-label>\n                        <ui5-select>\n                            <ui5-option selected="">Apple</ui5-option>\n                            <ui5-option>Samsung</ui5-option>\n                            <ui5-option>Huawei</ui5-option>\n                        </ui5-select>\n                    </div>\n                    <div\n                        style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                        <ui5-label>5 years guarantee included</ui5-label>\n                        <ui5-switch id="wiz-sw"></ui5-switch>\n                    </div>\n                </div>\n            </div>\n            <ui5-button id="wiz-toStep3" design="Emphasized" hidden="">Step 3</ui5-button>\n        </ui5-wizard-step>\n        <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">\n            <div style="display: flex; flex-direction: column;">\n                <ui5-title>3. Options</ui5-title><br />\n                <ui5-label wrapping-type="Normal">\n                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.\n                    Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet\n                    dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a\n                    turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer\n                    pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.\n                    Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\n                </ui5-label>\n                <ui5-message-strip>\n                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to\n                    work with.\n                </ui5-message-strip><br />\n                <div style="display: flex; flex-direction: column;">\n                    <div\n                        style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">\n                        <ui5-label>Manifacture date</ui5-label>\n                        <ui5-date-picker id="wiz-dp"></ui5-date-picker>\n                    </div>\n                </div>\n            </div>\n            <ui5-button id="wiz-finalize" hidden="" design="Emphasized">Finalize</ui5-button>\n        </ui5-wizard-step>\n    </ui5-wizard>\n    \x3c!-- </div> --\x3e\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/MessageStrip.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/Select.js";\nimport "@ui5/webcomponents/dist/Option.js";\nimport "@ui5/webcomponents/dist/DatePicker.js";\nimport "@ui5/webcomponents/dist/Switch.js";\n\nimport "@ui5/webcomponents-fiori/dist/Wizard.js";\nimport "@ui5/webcomponents-fiori/dist/WizardStep.js";\n\nimport "@ui5/webcomponents-icons/dist/product.js";\nimport "@ui5/webcomponents-icons/dist/hint.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\n\nconst wizardWiz = document.getElementById("wiz");\nconst wizardSw = document.getElementById("wiz-sw");\nconst wizardDp = document.getElementById("wiz-dp");\nconst wizardToStep2 = document.getElementById("wiz-toStep2");\nconst wizardToStep3 = document.getElementById("wiz-toStep3");\nconst wizardFinalize = document.getElementById("wiz-finalize");\n\nwizardWiz.addEventListener("step-change", function () {\n    console.log(event.detail.step);\n});\nwizardSw.addEventListener("change", function () {\n    wizardToStep3.removeAttribute("hidden");\n});\nwizardDp.addEventListener("change", function () {\n    wizardFinalize.removeAttribute("hidden");\n});\n\nwizardToStep2.addEventListener("click", function () {\n    deselectAll(wizardWiz);\n    setStep(wizardWiz, 1);\n    wizardToStep2.setAttribute("hidden", true);\n});\nwizardToStep3.addEventListener("click", function () {\n    deselectAll(wizardWiz);\n    setStep(wizardWiz, 2);\n    wizardToStep3.setAttribute("hidden", true);\n});\nwizardFinalize.addEventListener("click", function () {\n    alert("Done!");\n});\n\nfunction deselectAll(wizard) {\n    Array.from(wizard.children).forEach(function(step) {\n        step.selected = false;\n    });\n}\nfunction setStep(wizard, idx) {\n    var step = getStep(wizard, idx);\n    step.selected = true;\n    step.disabled = false;\n}\nfunction getStep(wizard, idx) {\n    return Array.from(wizard.children)[idx];\n}';function r(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:o,js:l})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 600px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-dialog id="dialog" stretch header-heading="Wizard">\n        <ui5-wizard id="wiz" content-layout="SingleStep">\n            <ui5-wizard-step icon="product" title-text="Product type" selected="">\n                <div style="display: flex; min-height: 200px; flex-direction: column;">\n                    <ui5-title>1. Product Type</ui5-title><br />\n                    <ui5-message-strip>\n                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the\n                        user to work with.\n                    </ui5-message-strip><br />\n                    <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus\n                        sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper,\n                        volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend\n                        tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec\n                        dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend\n                        sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis\n                        metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend,\n                        commodo tortor et, varius quam. Aliquam erat volutpat.\n                    </ui5-label>\n                </div>\n            </ui5-wizard-step>\n            <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">\n                <div style="display: flex;flex-direction: column">\n                    <ui5-title>2. Product Information</ui5-title><br />\n                    <ui5-label wrapping-type="Normal">\n                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero\n                        sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo\n                        sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus,\n                        molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada\n                        nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in\n                        libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar,\n                        sapien\n                    </ui5-label>\n                    <div style="display: flex; flex-direction: column;">\n                        <div\n                            style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">\n                            <ui5-label>Name</ui5-label>\n                            <ui5-input placeholder="product name..."></ui5-input>\n                        </div>\n                        <div\n                            style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                            <ui5-label>Weight</ui5-label>\n                            <ui5-input value="3.65"></ui5-input>\n                        </div>\n                        <div\n                            style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                            <ui5-label>Manifacturer</ui5-label>\n                            <ui5-select>\n                                <ui5-option selected="">Apple</ui5-option>\n                                <ui5-option>Samsung</ui5-option>\n                                <ui5-option>Huawei</ui5-option>\n                            </ui5-select>\n                        </div>\n                        <div\n                            style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">\n                            <ui5-label>5 years guarantee included</ui5-label>\n                            <ui5-switch id="wiz-sw"></ui5-switch>\n                        </div>\n                    </div>\n                </div>\n            </ui5-wizard-step>\n            <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">\n                <div style="display: flex; flex-direction: column;">\n                    <ui5-title>3. Options</ui5-title><br />\n                    <ui5-label wrapping-type="Normal">\n                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero\n                        sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo\n                        sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus,\n                        molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada\n                        nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in\n                        libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar,\n                        sapien\n                    </ui5-label>\n                    <ui5-message-strip>\n                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the\n                        user to work with.\n                    </ui5-message-strip><br />\n                    <div style="display: flex; flex-direction: column;">\n                        <div\n                            style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">\n                            <ui5-label>Manifacture date</ui5-label>\n                            <ui5-date-picker id="wiz-dp"></ui5-date-picker>\n                        </div>\n                    </div>\n                </div>\n            </ui5-wizard-step>\n        </ui5-wizard>\n        <ui5-bar id="footer" slot="footer" design="Footer">\n            <ui5-button id="prevButton" design="Emphasized" slot="endContent">Previous Step</ui5-button>\n            <ui5-button id="nextButton" design="Emphasized" slot="endContent">Next step</ui5-button>\n            <ui5-button id="wiz-finalize" design="Emphasized" slot="endContent">Finalize</ui5-button>\n            <ui5-button id="cancel" design="Transparent" slot="endContent">Cancel</ui5-button>\n        </ui5-bar>\n    </ui5-dialog>\n    <ui5-button id="button">Open dialog</ui5-button>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',u='import "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/MessageStrip.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/Select.js";\nimport "@ui5/webcomponents/dist/Option.js";\nimport "@ui5/webcomponents/dist/DatePicker.js";\nimport "@ui5/webcomponents/dist/Switch.js";\nimport "@ui5/webcomponents/dist/Dialog.js";\n\nimport "@ui5/webcomponents-fiori/dist/Wizard.js";\nimport "@ui5/webcomponents-fiori/dist/WizardStep.js";\nimport "@ui5/webcomponents/dist/Bar.js";\n\nimport "@ui5/webcomponents-icons/dist/product.js";\nimport "@ui5/webcomponents-icons/dist/hint.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\n\nconst btnOpendialog = document.getElementById("button");\nconst dialog = document.getElementById("dialog");\nconst nextStepButton = document.getElementById("nextButton");\nconst previousStepButton = document.getElementById("prevButton");\nconst cancelButton = document.getElementById("cancel");\nconst wizardWiz = document.getElementById("wiz");\nconst wizardFinalize = document.getElementById("wiz-finalize");\n\nconst deselectAll = (wizard) => {\n    Array.from(wizard.children).forEach((step) => {\n        step.selected = false;\n    });\n}\n\nconst getStep = (wizard, idx) => {\n    return Array.from(wizard.children)[idx];\n}\n\nconst setNextStep = (wizard, currentStepIndex, nextStepIndex) => {\n    const nextStep = getStep(wizard, nextStepIndex);\n    const currentStep = getStep(wizard, currentStepIndex);\n\n    nextStep.selected = true;\n    currentStep.disabled = false;\n}\n\nconst setPreviousStep = (wizard, currentStepIndex, previousStepIndex) => {\n    const previousStep = getStep(wizard, previousStepIndex);\n    const currentStep = getStep(wizard, currentStepIndex);\n\n    previousStep.selected = true;\n    currentStep.disabled = false;\n}\n\nconst setButtonVisibility = (index, totalItems) => {\n    const nextButton = document.getElementById(\'nextButton\');\n    const prevButton = document.getElementById(\'prevButton\');\n\n    if (index === 0) {\n        wizardFinalize.style.display = \'none\';\n        prevButton.style.display = \'none\';\n        nextButton.style.display = \'block\';\n    } else if (index === totalItems - 1) {\n        prevButton.style.display = \'block\';\n        wizardFinalize.style.display = \'block\';\n        nextButton.style.display = \'none\';\n    } else {\n        prevButton.style.display = \'block\';\n        nextButton.style.display = \'block\';\n    }\n}\n\nbtnOpendialog.addEventListener("click", () => {\n    dialog.show();\n    const index = wizardWiz.getSelectedStepIndex();\n    setButtonVisibility(index, wizardWiz.children.length);\n});\n\nwizardWiz.addEventListener("ui5-step-change", (event) => {\n    const index = wizardWiz.getSelectedStepIndex();\n    setButtonVisibility(index, wizardWiz.children.length)\n});\n\nnextStepButton.addEventListener("click", () => {\n    const index = wizardWiz.getSelectedStepIndex();\n    setNextStep(wizardWiz, index, index + 1);\n    setButtonVisibility(index + 1, wizardWiz.children.length)\n});\n\npreviousStepButton.addEventListener("click", () => {\n    const index = wizardWiz.getSelectedStepIndex();\n    deselectAll(wizardWiz);\n    setPreviousStep(wizardWiz, index, index - 1);\n    setButtonVisibility(index - 1, wizardWiz.children.length)\n});\n\ncancelButton.addEventListener("click", () => {\n    dialog.close();\n});\n\nwizardFinalize.addEventListener("click", () => {\n    alert("Finalize");\n    dialog.close();\n});';function c(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:d,js:u})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}const h={},m=void 0,x={id:"components/fiori/Wizard/Wizard",title:"Wizard",description:"The ui5-wizard helps users to complete a complex task by dividing it into sections and guiding them through it.",source:"@site/docs/components/fiori/Wizard/Wizard.mdx",sourceDirName:"components/fiori/Wizard",slug:"/components/fiori/Wizard/",permalink:"/ui5-webcomponents/nightly/components/fiori/Wizard/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"ViewSettingsDialog",permalink:"/ui5-webcomponents/nightly/components/fiori/ViewSettingsDialog/"},next:{title:"WizardStep",permalink:"/ui5-webcomponents/nightly/components/fiori/Wizard/WizardStep"}},g={},v=[{value:"Structure",id:"structure",level:3},{value:"Navigation area",id:"navigation-area",level:4},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Wizard Progress Navigation",id:"wizard-progress-navigation",level:4},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"Content",id:"content",level:4},{value:"Scrolling",id:"scrolling",level:3},{value:"Moving to next step",id:"moving-to-next-step",level:4},{value:"Usage",id:"usage",level:3},{value:"When to use:",id:"when-to-use",level:4},{value:"When not to use:",id:"when-not-to-use",level:4},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"contentLayout",id:"contentlayout",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"step-change",id:"step-change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Page Mode",id:"page-mode",level:3}];function w(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," helps users to complete a complex task by dividing it into sections and guiding them through it.\nIt has two main areas - a navigation area at the top showing the step sequence and a content area below it."]}),"\n",(0,n.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(t.h4,{id:"navigation-area",children:"Navigation area"}),"\n",(0,n.jsxs)(t.p,{children:["The top most area of the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," is occupied by the navigation area.\nIt shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Steps can have different visual representations - numbers or icons."}),"\n",(0,n.jsx)(t.li,{children:"Steps might have labels for better readability - titleText and subTitleText."}),"\n",(0,n.jsxs)(t.li,{children:["Steps are defined by using the ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," as slotted element within the ",(0,n.jsx)(t.code,{children:"ui5-wizard"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," If no selected step is defined, the first step will be auto selected."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," If multiple selected steps are defined, the last step will be selected."]}),"\n",(0,n.jsx)(t.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,n.jsx)(t.p,{children:"The user can navigate using the following keyboard shortcuts:"}),"\n",(0,n.jsx)(t.h4,{id:"wizard-progress-navigation",children:"Wizard Progress Navigation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"[Left] or [Down] - Focus moves backward to the WizardProgressNavAnchors."}),"\n",(0,n.jsx)(t.li,{children:"[Up] or [Right] - Focus moves forward to the WizardProgressNavAnchor."}),"\n",(0,n.jsx)(t.li,{children:"[Space] / [Enter] or [Return] - Selects an active step"}),"\n",(0,n.jsx)(t.li,{children:"[Home] or [PAGE UP] - Focus goes to the first step"}),"\n",(0,n.jsx)(t.li,{children:"[End] or [PAGE DOWN] - Focus goes to the last step"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,n.jsxs)(t.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,n.jsx)(t.h4,{id:"content",children:"Content"}),"\n",(0,n.jsxs)(t.p,{children:["The content occupies the main part of the page. It can hold any type of HTML elements.\nIt's defined by using the ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," as slotted element within the ",(0,n.jsx)(t.code,{children:"ui5-wizard"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"scrolling",children:"Scrolling"}),"\n",(0,n.jsx)(t.p,{children:"The component handles user scrolling by selecting the closest step, based on the current scroll position\nand scrolls to particular place, when the user clicks on the step within the navigation area."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Important:"})," In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.\nThe component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"For example:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<ui5-dialog style="height: 80%">\n\t<ui5-wizard></ui5-wizard>\n</ui5-dialog>\n'})}),"\n",(0,n.jsx)(t.h4,{id:"moving-to-next-step",children:"Moving to next step"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," provides the necessary API and it's up to the user of the component to use it to move to the next step.\nYou have to set its ",(0,n.jsx)(t.code,{children:"selected"})," property (and remove the ",(0,n.jsx)(t.code,{children:"disabled"})," one if set) to ",(0,n.jsx)(t.code,{children:"true"}),".\nThe ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," will automatically scroll to the content of the newly selected step."]}),"\n",(0,n.jsxs)(t.p,{children:['The Fiori 3 guidelines recommends having a "nextStep" button in the content area.\nYou can place a button, or any other type of element to trigger step change, inside the ',(0,n.jsx)(t.code,{children:"ui5-wizard-step"}),",\nand show/hide it when certain fields are filled or user defined criteria is met."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h4,{id:"when-to-use",children:"When to use:"}),"\n",(0,n.jsx)(t.p,{children:"When the user has to accomplish a long or unfamiliar task."}),"\n",(0,n.jsx)(t.h4,{id:"when-not-to-use",children:"When not to use:"}),"\n",(0,n.jsx)(t.p,{children:"When the task has less than 3 steps."}),"\n",(0,n.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,n.jsx)(t.p,{children:"On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.\nTapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog."}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/Wizard.js";'})," (includes ",(0,n.jsx)("ui5-wizard-step",{}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsxs)(t.p,{children:["By default the navigation to another step happens with scrolling or pressing the given step in the Wizard header.\n",(0,n.jsx)("b",{children:"How to use the sample:"}),' to explore the steps click the "Step2\' button, then enable the "5 years guarantee included\n" switch to disover the "Step3" button to reach the final step.']}),"\n",(0,n.jsx)(a,{}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"contentlayout",children:"contentLayout"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines how the content of the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," would be visualized."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"MultipleSteps" | "SingleStep"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"MultipleSteps"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.14.0"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the steps.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Use the available ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," component."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<WizardStep>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"step-change",children:"step-change"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent<WizardStepChangeEventDetail>"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"step"}),": ",(0,n.jsx)(t.code,{children:"WizardStep"}),(0,n.jsx)("br",{}),"The new step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"previousStep"}),": ",(0,n.jsx)(t.code,{children:"WizardStep"}),(0,n.jsx)("br",{}),"The previous step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"changeWithClick"}),": ",(0,n.jsx)(t.code,{children:"boolean"}),(0,n.jsx)("br",{}),"The step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"navigator"}),(0,n.jsxs)(t.td,{children:["Used to style the progress navigator of the ",(0,n.jsx)(t.code,{children:"ui5-wizard"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"step-content"}),(0,n.jsxs)(t.td,{children:["Used to style a ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," container."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,n.jsx)(t.h3,{id:"page-mode",children:"Page Mode"}),"\n",(0,n.jsx)(t.p,{children:"Instead of scrolling each step is shown as a separate page."}),"\n",(0,n.jsx)(p,{})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}},1184:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var n=i(4041);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);