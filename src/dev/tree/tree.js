import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const list0 = [
    {
      label: 'Technology',
      children: [
        {
          label: 'Hardware',
          children: [
            { label: 'Apple', children: [] },
            { label: 'Dell', children: [] },
            { label: 'HP', children: [] },
          ],
        },
        {
          label: 'Software',
          children: [
            {
              label: 'Operating Systems',
              children: [
                { label: 'Microsoft Windows', children: [] },
                { label: 'Apple macOS', children: [] },
                { label: 'Linux', children: [] },
              ],
            },
            {
              label: 'Applications',
              children: [
                { label: 'Microsoft Office', children: [] },
                { label: 'Adobe Photoshop', children: [] },
                { label: 'Google Chrome', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Services',
          children: [
            {
              label: 'Cloud Computing',
              children: [
                { label: 'Amazon Web Services (AWS)', children: [] },
                { label: 'Microsoft Azure', children: [] },
                { label: 'Google Cloud', children: [] },
              ],
            },
            {
              label: 'Social Media',
              children: [
                { label: 'Facebook', children: [] },
                { label: 'Twitter', children: [] },
                { label: 'Instagram', children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
const list1 = [
    {
      label: 'Technology',
      children: [
        {
          label: 'Hardware',
          children: [
            { label: 'Apple', children: [] },
            { label: 'Dell', children: [] },
            { label: 'HP', children: [] },
          ],
        },
        {
          label: 'Software',
          children: [
            {
              label: 'Operating Systems',
              children: [
                { label: 'Microsoft Windows', children: [] },
                { label: 'Apple macOS', children: [] },
                { label: 'Linux', children: [] },
              ],
            },
            {
              label: 'Applications',
              children: [
                { label: 'Microsoft Office', children: [] },
                { label: 'Adobe Photoshop', children: [] },
                { label: 'Google Chrome', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Services',
          children: [
            {
              label: 'Cloud Computing',
              children: [
                { label: 'Amazon Web Services (AWS)', children: [] },
                { label: 'Microsoft Azure', children: [] },
                { label: 'Google Cloud', children: [] },
              ],
            },
            {
              label: 'Social Media',
              children: [
                { label: 'Facebook', children: [] },
                { label: 'Twitter', children: [] },
                { label: 'Instagram', children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
const list2 = [
    {
      label: 'Technology',
      children: [
        {
          label: 'Hardware',
          children: [
            { label: 'Apple', children: [] },
            { label: 'Dell', children: [] },
            { label: 'HP', children: [] },
          ],
        },
        {
          label: 'Software',
          children: [
            {
              label: 'Operating Systems',
              children: [
                { label: 'Microsoft Windows', children: [] },
                { label: 'Apple macOS', children: [] },
                { label: 'Linux', children: [] },
              ],
            },
            {
              label: 'Applications',
              children: [
                { label: 'Microsoft Office', children: [] },
                { label: 'Adobe Photoshop', children: [] },
                { label: 'Google Chrome', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Services',
          children: [
            {
              label: 'Cloud Computing',
              children: [
                { label: 'Amazon Web Services (AWS)', children: [] },
                { label: 'Microsoft Azure', children: [] },
                { label: 'Google Cloud', children: [] },
              ],
            },
            {
              label: 'Social Media',
              children: [
                { label: 'Facebook', children: [] },
                { label: 'Twitter', children: [] },
                { label: 'Instagram', children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
const list3 = [
    {
      label: 'Technology',
      children: [
        {
          label: 'Hardware',
          children: [
            { label: 'Apple', children: [] },
            { label: 'Dell', children: [] },
            { label: 'HP', children: [] },
          ],
        },
        {
          label: 'Software',
          children: [
            {
              label: 'Operating Systems',
              children: [
                { label: 'Microsoft Windows', children: [] },
                { label: 'Apple macOS', children: [] },
                { label: 'Linux', children: [] },
              ],
            },
            {
              label: 'Applications',
              children: [
                { label: 'Microsoft Office', children: [] },
                { label: 'Adobe Photoshop', children: [] },
                { label: 'Google Chrome', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Services',
          children: [
            {
              label: 'Cloud Computing',
              children: [
                { label: 'Amazon Web Services (AWS)', children: [] },
                { label: 'Microsoft Azure', children: [] },
                { label: 'Google Cloud', children: [] },
              ],
            },
            {
              label: 'Social Media',
              children: [
                { label: 'Facebook', children: [] },
                { label: 'Twitter', children: [] },
                { label: 'Instagram', children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];

class DevTree extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:1280px;height:720px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree
                                .list="${list0}"
                                variant="plain"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree
                                .list="${list1}"
                                variant="accordion"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree
                                .list="${list2}"
                                variant="tree"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree
                                .list="${list3}"
                                variant="level"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tree", DevTree);

export default document.createElement("dev-tree");
