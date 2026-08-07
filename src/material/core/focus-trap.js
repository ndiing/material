// core/focus-trap.js
const FOCUSABLE = 'button:not([tabindex="-1"]):not([disabled]),input:not([tabindex="-1"]):not([disabled]),select:not([tabindex="-1"]):not([disabled]),textarea:not([tabindex="-1"]):not([disabled]),[tabindex]:not([tabindex="-1"]):not([disabled])';

function initFocusTrap() {
    document.body.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") return;
        
        const root = document.body.querySelector("md-dialog[open]") || document.body;
        const focusable = Array.from(root.querySelectorAll(FOCUSABLE))
            .filter(el => el.checkVisibility({ opacityProperty: true }));
        
        if (focusable.length === 0) return;
        
        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey 
            ? (currentIndex - 1 + focusable.length) % focusable.length 
            : (currentIndex + 1) % focusable.length;
        
        event.preventDefault();
        focusable[nextIndex]?.focus();
    });
}

export{initFocusTrap}
