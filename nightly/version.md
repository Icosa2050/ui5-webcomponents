commit 0bb5c9d8632092d875fa6333d817475aa73f1e71
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Mon Apr 15 11:16:48 2024 +0300

    feat(ui5-avatar-group): update focus handling (#8550)
    
    Adjusted ui5-avatar-group focus display rules. On desktop, focus outline
    is always visible. For mobile, focus outline only appears with an
    external keyboard, it remains hidden for touch focus.
    
    Related to: #8320
