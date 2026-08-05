import { html, nothing } from "lit";
import { MdElement } from "./element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { classMap } from "lit/directives/class-map.js";

class MdListElement extends MdElement {
    static properties = {
        items: { type: Array },
        _list: { type: Array, state: true },
        _tree: { type: Array, state: true },
        _stack: { type: Array, state: true },
        type: { type: String },
        valueField: { type: String },
        parentField: { type: String },
        labelField: { type: String },
    };
    get current() {
        return this._stack[this._stack.length - 1];
    }

    constructor() {
        super();
        this.items = [];
        this._list = [];
        this._tree = [];
        this._stack = [];
        this.type = "list";
        this.valueField = "id";
        this.parentField = "parent_id";
        this.labelField = "label";
        this.selectedValues = new Set();
        this.expandedValues = new Set();
    }

    _setStack() {
        const [selectedId] = this.selectedValues;
        if (!selectedId) {
            this._stack = [{ items: this._tree, parent: null }];
            return;
        }
        const path = this._getSelectedParents(selectedId);
        const stack = [];
        let current = this._tree;
        stack.push({
            items: current,
            parent: null,
        });
        for (const parentId of path) {
            const node = current.find((n) => n[this.valueField] === parentId);
            if (!node) break;
            current = node.children || [];
            stack.push({
                items: current,
                parent: node,
            });
        }
        this._stack = stack;
    }

    _getItems() {
        const items = [];
        const walk = (node, level = 0) => {
            const expanded = this.expandedValues.has(node[this.valueField]);
            const { children, ...item } = node;
            items.push({ ...item, hasChildren: !!children?.length, expanded, level });
            if (!expanded) {
                return;
            }
            if (children?.length) {
                children.forEach((node) => walk(node, level + 1));
            }
        };
        this._tree.forEach((node) => walk(node, 0));
        return items;
    }

    _setItems() {
        this._list = this._getItems();
    }

    _getSelectedParents(id) {
        const path = [];
        let current = id;
        while (this._parents.has(current)) {
            const parent = this._parents.get(current);
            path.push(parent);
            current = parent;
        }
        return path.reverse();
    }

    _getAllSelectedParents() {
        const parents = new Set();
        for (const id of this.selectedValues) {
            const path = this._getSelectedParents(id);
            path.forEach((p) => parents.add(p));
        }
        return parents;
    }

    _setExpanded() {
        const parents = this._getAllSelectedParents();
        parents.forEach((id) => this.expandedValues.add(id));
    }

    _getParents() {
        const parents = new Map();
        const walk = (node, parent) => {
            if (parent) {
                parents.set(node[this.valueField], parent[this.valueField]);
            }
            if (node.children?.length) {
                node.children.forEach((child) => walk(child, node));
            }
        };
        this._tree.forEach((node) => walk(node));
        return parents;
    }

    _setParents() {
        this._parents = this._getParents();
    }

    _getSelected() {
        const selected = new Set();
        const nodes = [...this._tree];
        while (nodes.length) {
            const node = nodes.pop();
            if (node.selected) {
                selected.add(node[this.valueField]);
            }
            if (node.children?.length) {
                nodes.push(...node.children);
            }
        }
        return selected;
    }

    _setSelected() {
        const selected = this._getSelected();
        selected.forEach((id) => this.selectedValues.add(id));
    }

    _buildTree(items) {
        const map = new Map();
        const tree = [];
        items.forEach((item) => {
            map.set(item[this.valueField], { ...item, children: [] });
        });
        items.forEach((item) => {
            const node = map.get(item[this.valueField]);
            if (item[this.parentField]) {
                const parent = map.get(item[this.parentField]);
                if (parent) {
                    parent.children.push(node);
                } else {
                    tree.push(node);
                }
            } else {
                tree.push(node);
            }
        });
        return tree;
    }

    _setTree() {
        this._tree = this._buildTree(this.items);
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("items")) {
            this._setTree();
            this._setSelected();
            this._setParents();
            if (this.type === "list" || this.type === "tree") {
                this._setExpanded();
                this._setItems();
            } else if (this.type === "stack") {
                this._setStack();
            }
        }
    }

    push(item) {
        this._stack = [
            ...this._stack,
            {
                items: item.children,
                parent: item,
            },
        ];
    }

    pop() {
        if (this._stack.length > 1) {
            this._stack = this._stack.slice(0, -1);
        }
    }
}

export { MdListElement };
