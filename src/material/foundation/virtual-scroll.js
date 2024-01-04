import { MDCDK } from "./cdk";

/**
 * Represents a virtual scrolling functionality using Material Design components.
 * Extends {@link MDCDK}.
 */
class MDVirtualScroll extends MDCDK {
    /**
     * Calculates the parameters required for virtual scrolling.
     * @returns {Object} Detail object containing calculated parameters:
     * - totalContentHeight: Total height of the scrollable content.
     * - startNode: Index of the first visible node in the viewport.
     * - visibleNodesCount: Number of visible nodes in the viewport.
     * - offsetY: Offset of the first visible node from the top of the viewport.
     */
    calculate() {
        const itemCount = 100;
        const rowHeight = 48;
        const scrollTop = 0;
        const nodePadding = 2;
        const viewportHeight = 480;

        const totalContentHeight = itemCount * rowHeight;

        let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
        startNode = Math.max(0, startNode);

        let visibleNodesCount = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
        visibleNodesCount = Math.min(itemCount - startNode, visibleNodesCount);

        const offsetY = startNode * rowHeight;

        const detail = {
            totalContentHeight,
            startNode,
            visibleNodesCount,
            offsetY,
        };

        return detail;
    }
}

export { MDVirtualScroll };
