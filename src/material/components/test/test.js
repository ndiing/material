let isInitialLoad = true;
let resolveNavigation;
let navigationDirection = "forwards";

window.navigation.addEventListener("navigate", (event) => {
    if (!event.isSameDocument && event.navigationType !== "traverse") {
        return;
    }

    if (event.navigationType === "traverse") {
        const destinationIndex = event.destination.index;
        const currentIndex = window.navigation.currentEntry.index;
        navigationDirection = destinationIndex < currentIndex ? "backwards" : "forwards";
    } else {
        navigationDirection = "forwards";
    }
});

window.addEventListener("onNavigationStart", () => {
    if (isInitialLoad) {
        isInitialLoad = false;
        return;
    }

    const navigationPromise = new Promise((resolve) => {
        resolveNavigation = resolve;
    });

    if (document.startViewTransition) {
        const transition = document.startViewTransition(async () => {
            await navigationPromise;
        });

        if (transition.types) {
            transition.types.add(navigationDirection);
        }
    }
});

window.addEventListener("onNavigationEnd", () => {
    if (resolveNavigation) {
        resolveNavigation();
        resolveNavigation = null;
    }
});
