importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");

self.addEventListener("widgetinstall", (event) => {
    event.waitUntil(updateWidget(event));
});

self.addEventListener("widgetresume", (event) => {
    event.waitUntil(updateWidget(event));
});

self.addEventListener("widgetclick", (event) => {
    if (event.action == "updateName") {
        event.waitUntil(updateName(event));
    }
});

self.addEventListener("widgetuninstall", (event) => {});

const updateWidget = async (event) => {
    const widgetDefinition = event.widget.definition;

    const payload = {
        template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
        data: JSON.stringify(await (await fetch(widgetDefinition.data)).json()),
    };

    await self.widgets.updateByInstanceId(event.instanceId, payload);
};

const updateName = async (event) => {
    const name = event.data.json().name;

    const widgetDefinition = event.widget.definition;

    const payload = {
        template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
        data: JSON.stringify({ name }),
    };

    await self.widgets.updateByInstanceId(event.instanceId, payload);
};

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
