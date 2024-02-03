import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";
const items=[
    { icon:'done_all', label: 'Image',  routerLink: '/image',  },
    { icon:'done_all', label: 'Emoji',  routerLink: '/emoji',  },
    { icon:'done_all', label: 'Icon',  routerLink: '/icon',  },
    { icon:'done', label: 'Tooltip',  routerLink: '/tooltip',  },
    // { icon:'done', label: 'Time Picker',  routerLink: '/time-picker',  },
    { icon:'done', label: 'Text Field',  routerLink: '/text-field',  },
    { icon:'done', label: 'Tab',  routerLink: '/tab',  },
    { icon:'done_all', label: 'Switch',  routerLink: '/switch',  },
    { icon:'done', label: 'Snackbar',  routerLink: '/snackbar',  },
    { icon:'done', label: 'Slider',  routerLink: '/slider',  },
    { icon:'done_all', label: 'Sheet',  routerLink: '/sheet',  },
    // { icon:'done', label: 'Side Sheet',  routerLink: '/side-sheet',  },
    // { icon:'done', label: 'Bottom Sheet',  routerLink: '/bottom-sheet',  },
    // { icon:'done', label: 'Search',  routerLink: '/search',  },
    { icon:'done_all', label: 'Radio Button',  routerLink: '/radio-button',  },
    { icon:'done', label: 'Progress Indicator',  routerLink: '/progress-indicator',  },
    { icon:'done_all', label: 'Navigation Rail',  routerLink: '/navigation-rail',  },
    { icon:'done_all', label: 'Navigation Drawer',  routerLink: '/navigation-drawer',  },
    { icon:'done_all', label: 'Navigation Bar',  routerLink: '/navigation-bar',  },
    { icon:'done_all', label: 'Menu',  routerLink: '/menu',  },
    { icon:'done_all', label: 'List',  routerLink: '/list',  },
    { icon:'done_all', label: 'Divider',  routerLink: '/divider',  },
    { icon:'done_all', label: 'Dialog',  routerLink: '/dialog',  },
    // { icon:'done', label: 'Date Picker',  routerLink: '/date-picker',  },
    { icon:'done', label: 'Chip',  routerLink: '/chip',  },
    { icon:'done_all', label: 'Checkbox',  routerLink: '/checkbox',  },
    { icon:'done', label: 'Carousel',  routerLink: '/carousel',  },
    { icon:'done_all', label: 'Card',  routerLink: '/card',  },
    { icon:'done_all', label: 'Segmented Button',  routerLink: '/segmented-button',  },
    { icon:'done_all', label: 'Icon Button',  routerLink: '/icon-button',  },
    { icon:'done_all', label: 'Fab',  routerLink: '/fab',  },
    { icon:'done_all', label: 'Button',  routerLink: '/button',  },
    { icon:'done_all', label: 'Badge',  routerLink: '/badge',  },
    { icon:'done_all', label: 'Top App Bar',  routerLink: '/top-app-bar',  },
    { icon:'done_all', label: 'Bottom App Bar',  routerLink: '/bottom-app-bar',  },
].sort((a, b) => new Intl.Collator(undefined,{sensitivity:'base'}).compare(a.label,b.label))

class MainComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div style="width:360px;padding:8px 0;" class="md-layout__item md-layout__item--west" open>
                    <md-navigation-drawer
                        .items="${items}"
                    ></md-navigation-drawer>
                </div>
                <div style="padding:24px;" class="md-layout__item md-layout__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }
}

customElements.define("main-component", MainComponent);

export default document.createElement("main-component");
