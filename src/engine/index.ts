/* global window, document */

import Canvas from './Canvas';
import * as Logics from '../types/vue-logics';

let loaded = false;

class Flowy implements Logics.Flowy.FlowyElementInterface {
  id: number;
  node: HTMLDivElement;
  window: Window;
  onGrab: ((block: HTMLDivElement) => any) | undefined;
  onRelease: (() => any) | undefined;
  /* eslint-disable max-len */
  onSnap: ((block: HTMLDivElement, first?: boolean, parent?: Logics.Block.BlockInterface | undefined) => any) | undefined;
  import: ((data: any) => void) | undefined;
  output: (() => any) | undefined;
  deleteBlocks: (() => void) | undefined;

  constructor(canvas, onGrab, onRelease, onSnap, spacingX, spacingY) {
    /* eslint-disable max-len */
    this.engine(document, new Canvas({ spacingX, spacingY, window, document, node: canvas }), onGrab, onRelease, onSnap);
  }

  /* eslint-disable max-len */
  engine = (document: Document, canvas: Logics.Canvas.CanvasInterface, onGrab = undefined, onRelease = undefined, onSnap = undefined) => {
    const self = this;
    // NOTE: set callbacks even when initialized to allow React rerenders
    this.onGrab = onGrab;
    this.onRelease = onRelease;
    this.onSnap = onSnap;

    if (loaded) {
      return;
    }

    loaded = true;

    canvas.initialize();
    canvas.setState({
      currentOffsetLeft: 0,
      previousOffsetLeft: 0,
    });
    this.import = canvas.import;
    this.output = canvas.output;
    this.deleteBlocks = canvas.reset;

    const handleCoordinates = (event: MouseEvent | TouchEvent) => {
      const { clientX, clientY } = (event as TouchEvent).targetTouches
        ? (event as TouchEvent).targetTouches[0]
        : (event as MouseEvent);
      return canvas.setState({
        mouseX: clientX,
        mouseY: clientY,
      });
    };

    function hasParentClass(node, classname) {
      if (node.className && node.className.split(' ').indexOf(classname) >= 0) {
        return true;
      }

      return node.parentNode && hasParentClass(node.parentNode, classname);
    }

    function touchblock(event) {
      canvas.toggleDraggingBlock(false);

      if (!hasParentClass(event.target, 'block')) {
        return;
      }

      const theblock = event.target.closest('.block');

      const { mouseX, mouseY } = handleCoordinates(event);

      if (
        event.type !== 'mouseup'
        && hasParentClass(event.target, 'block')
        && event.which !== 3
        && !canvas.isDragging
        && !canvas.isRearranging
      ) {
        canvas.toggleDraggingBlock(true);
        canvas.registerDragger(theblock);

        const draggedElement = canvas.draggedElement!;

        if (mouseX && mouseY) {
          canvas.setState({
            dragX: mouseX - draggedElement.position().left,
            dragY: mouseY - draggedElement.position().top,
          });
        }
      }
    }

    function beginDrag(event) {
      handleCoordinates(event);

      const { target, which } = event;
      const grabbedNode = (target! as HTMLElement).closest('.create-flowy') as HTMLDivElement;

      if (which === 3 || grabbedNode === null) {
        return;
      }

      canvas.grab(grabbedNode);
      canvas.toggleDragging(true);

      if (self.onGrab) {
        self.onGrab(grabbedNode);
      }
    }

    document.addEventListener('mousedown', touchblock, false);
    document.addEventListener('touchstart', touchblock, false);

    document.addEventListener('mousedown', beginDrag);
    document.addEventListener('touchstart', beginDrag);

    function rearrangeMe() {
      const parents = canvas.blocks.map(({ parent }) => (parent));

      for (let z = 0; z < parents.length; z += 1) {
        if (parents[z] === -1) {
          z += 1;
        }

        let totalRemove = 0;

        const parentBlock = canvas.findBlock(parents[z])!;
        const childBlocks = canvas.findChildBlocks(parents[z]);

        const totalWidth = childBlocks.reduce((total, block, i) => {
          if (canvas.findChildBlocks(block.id).length === 0) {
            block.childWidth = 0;
          }

          let tmp = total;

          // skip one item
          if (i !== 0) {
            tmp += canvas.spacingX;
          }

          return tmp + block.maxWidth();
        }, 0);

        if (parents[z] !== -1) {
          parentBlock.childWidth = totalWidth;
        }

        const { left, top } = canvas.position();

        childBlocks.forEach((block) => {
          const blockElement = canvas.findBlockElement(block.id)!;
          const arrowElement = blockElement.arrow();

          if (block.childWidth > block.width) {
            blockElement.styles({
              left: `${
                parentBlock.x - totalWidth / 2
                + totalRemove
                + block.childWidth / 2 - block.width / 2 - left}px`,
            });
          } else {
            blockElement.styles({
              left: `${
                parentBlock.x - totalWidth / 2
                + totalRemove - left}px`,
            });
          }

          block.x = parentBlock.x - totalWidth / 2 + totalRemove + block.maxWidth() / 2;
          totalRemove += block.maxWidth() + canvas.spacingX;

          const parent = canvas.findBlock(block.parent)!;
          const { x: parentX, y: parentY, height: parentHeight } = parent;
          const { x, y, height } = canvas.blocks.find(({ id }) => (id === block.id))!;
          const arrowX = x - parentX + 20;
          const arrowY = y - height / 2 - (parentY + parentHeight / 2);

          arrowElement.styles({ top: `${parentY + parentHeight / 2 - top}px` });

          if (arrowX < 0) {
            arrowElement.styles({ left: `${x - 5 - left}px` });
            arrowElement.html(`
              <input type="hidden" class="arrowid" value="${block.id}">
              <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="
                  M ${parentX - x + 5} 0
                  L ${parent.x - x + 5} ${canvas.spacingY / 2}
                  L 5 ${canvas.spacingY / 2}
                  L 5 ${arrowY}" stroke="#C5CCD0" stroke-width="2px"/>
                <path d="
                  M 0 ${arrowY - 5}
                  H 10
                  L 5 ${arrowY}
                  L 0 ${arrowY - 5}
                  Z" fill="#C5CCD0"/>
              </svg>
            `);
          } else {
            arrowElement.styles({ left: `${parentX - 20 - left}px` });
            arrowElement.html(`
              <input type="hidden" class="arrowid" value="${block.id}">
              <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="
                  M 20 0
                  L 20 ${canvas.spacingY / 2}
                  L ${arrowX} ${canvas.spacingY / 2}
                  L ${arrowX} ${arrowY}" stroke="#C5CCD0" stroke-width="2px"/>
                <path d="
                  M ${arrowX - 5} ${arrowY - 5}
                  H ${arrowX + 5}
                  L ${arrowX} ${arrowY}
                  L ${arrowX - 5} ${arrowY - 5}
                  Z" fill="#C5CCD0"/>
              </svg>
            `);
          }
        });
      }
    }

    function checkOffset() {
      const widths = canvas.blocks.map(({ width }) => width);
      const currentOffsetLeft = Math.min(
        ...canvas.blocks.map(({ x }, index) => (x - widths[index] / 2)),
      );

      canvas.setState({ currentOffsetLeft });

      if (currentOffsetLeft < canvas.position().left) {
        canvas.toggleLastEvent(true);

        canvas.blocks.forEach(({ id, x, width, parent }) => {
          const blockElement = canvas.findBlockElement(id)!;

          blockElement.styles({ left: `${x - width / 2 - currentOffsetLeft + 20}px` });

          if (parent === -1) {
            return;
          }

          const arrowElement = blockElement.arrow();
          const parentX = canvas.blocks.find(block => (block.id === parent))!.x;
          const arrowX = x - parentX;

          arrowElement.styles({
            left: `${(arrowX < 0)
              ? x - currentOffsetLeft + 20 - 5
              : parentX - 20 - currentOffsetLeft + 20}px`,
          });
        });

        canvas.blocks.forEach((block) => {
          const blockElement = canvas.findBlockElement(block.id)!;

          block.x = blockElement.position().left
            + (canvas.position().left + canvas.position().scrollLeft)
            - canvas.draggedElement!.position().width / 2
            - 40;
        });

        canvas.setState({ previousOffsetLeft: currentOffsetLeft });
      }
    }

    function snap(block: Logics.Block.BlockInterface) {
      const draggedElement = canvas.draggedElement!;
      if (!canvas.isRearranging) {
        // TODO: replace with `canvas.drop()`?
        canvas.appendChild(draggedElement.node);
      }

      let totalRemove = 0;

      const childBlocks = canvas.findChildBlocks(block.id);

      const totalWidth = childBlocks.reduce(
        (total, { maxWidth }) => total + maxWidth() + canvas.spacingX,
        canvas.draggedElement!.position().width,
      );

      childBlocks.forEach((childBlock) => {
        const { id, childWidth, width, maxWidth } = childBlock;
        const childElement = canvas.findBlockElement(id);
        let left = block.x - totalWidth / 2 + totalRemove;

        childBlock.x = left + maxWidth() / 2 + 200;
        totalRemove += maxWidth() + canvas.spacingX;

        if (childWidth > width) {
          left += childWidth / 2 - width / 2;
        }

        if (childElement) {
          childElement.styles({ left: `${left}px` });
        }
      });

      const { top, left, scrollTop, scrollLeft } = canvas.position();

      canvas.draggedElement!.styles({
        left: `${block.x - totalWidth / 2 + totalRemove - left + scrollLeft}px`,
        top: `${block.y + block.height / 2 + canvas.spacingY - top}px`,
      });

      if (canvas.isRearranging) {
        const { height, width } = draggedElement.position();
        const draggedTreeBlock = canvas.findBlock(draggedElement.id, { tree: true });

        if (draggedTreeBlock) {
          draggedTreeBlock.x = draggedElement.position().left + width / 2 + scrollLeft * 2;
          draggedTreeBlock.y = draggedElement.position().top + height / 2 + scrollTop;
          draggedTreeBlock.parent = block.id;
        }

        canvas.draggedTree.forEach((treeBlock) => {
          if (treeBlock.id === draggedElement.id) {
            return;
          }

          const blockElement = canvas.findBlockElement(treeBlock.id)!;
          const arrowElement = blockElement.arrow();
          const blockParent = blockElement.node;
          const arrowParent = arrowElement.node;

          blockElement.styles({
            left: `${blockElement.position().left - left + scrollLeft}px`,
            top: `${blockElement.position().top - top + scrollTop}px`,
          });
          arrowElement.styles({
            left: `${arrowElement.position().left - left + scrollLeft + 20}px`,
            top: `${arrowElement.position().top - top + scrollTop}px`,
          });

          canvas.appendChild(blockParent, arrowParent);

          treeBlock.x = blockElement.position().left + width / 2 + scrollLeft;
          treeBlock.y = blockElement.position().top + height / 2 + scrollTop;
        });

        canvas.appendBlocks(canvas.draggedTree);
        canvas.draggedTree.splice(0);
      } else {
        canvas.addBlockForElement(draggedElement, { parent: block.id });
      }

      const draggedBlock = canvas.findBlock(draggedElement.id) as Logics.Block.BlockInterface;
      const { x, y, height } = draggedBlock;
      const arrowX = x - block.x + 20;
      // TODO: should this be using the first match?
      const arrowY = parseFloat(`${
        y
        - height / 2
        - (canvas.blocks.find(({ parent }) => (parent === block.id))!.y
          + canvas.blocks.find(({ parent }) => (parent === block.id))!.height / 2)
        + scrollTop}`);

      if (arrowX < 0) {
        canvas.appendHtml(`
          <div class="arrowblock">
            <input type="hidden" class="arrowid" value="${draggedElement.id}">
            <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="
                M ${block.x - x + 5} 0
                L ${block.x - x + 5} ${canvas.spacingY / 2}
                L 5 ${canvas.spacingY / 2}
                L 5 ${arrowY}" stroke="#C5CCD0" stroke-width="2px"/>
              <path d="
                M 0 ${arrowY - 5}
                H 10
                L 5 ${arrowY}
                L 0 ${arrowY - 5}
                Z" fill="#C5CCD0"/>
            </svg>
          </div>
        `);
        draggedElement.arrow().styles({ left: `${x - 5 - left + scrollLeft}px` });
      } else {
        canvas.appendHtml(`
          <div class="arrowblock">
            <input type="hidden" class="arrowid" value="${draggedElement.id}">
            <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="
                M 20 0
                L 20 ${canvas.spacingY / 2}
                L ${arrowX} ${canvas.spacingY / 2}
                L ${arrowX} ${arrowY}" stroke="#C5CCD0" stroke-width="2px"/>
              <path d="
                M ${arrowX - 5} ${arrowY - 5}
                H ${arrowX + 5}
                L ${arrowX} ${arrowY}
                L ${arrowX - 5} ${arrowY - 5}
                Z" fill="#C5CCD0"/>
            </svg>
          </div>
        `);
        draggedElement.arrow().styles({ left: `${block.x - 20 - left + scrollLeft}px` });
      }
      draggedElement.arrow().styles({ top: `${block.y + block.height / 2}px` });

      if (block.parent !== -1) {
        let loopBlock = block;

        do {
          const children = canvas.blocks.filter(({ parent }) => (parent === loopBlock.id));

          loopBlock.childWidth = children.reduce((zWidth, { maxWidth }, w) => {
            let tmpZWidth = zWidth;
            // skip one item
            if (w !== 0) {
              tmpZWidth += canvas.spacingX;
            }
            return tmpZWidth + maxWidth();
          }, 0);

          loopBlock = canvas.blocks.find(({ id }) => (id === loopBlock.parent))!;
        } while (loopBlock.parent !== -1);

        loopBlock.childWidth = totalWidth;
      }

      if (canvas.isRearranging) {
        canvas.toggleRearranging(false);
        canvas.toggleDragger(false);
      }

      rearrangeMe();
      checkOffset();
    }

    function endDrag(event) {
      if (event.which === 3 || !(canvas.isDragging || canvas.isRearranging)) {
        return;
      }

      canvas.toggleDraggingBlock(false);

      if (self.onRelease) {
        self.onRelease();
      }

      canvas.showIndicator(false);

      const draggedElement = canvas.draggedElement!;

      if (canvas.isDragging) {
        canvas.toggleDragger(false);
      }

      if (draggedElement.id === 0 && canvas.isRearranging) {
        canvas.toggleDragger(false);
        canvas.toggleRearranging(false);
        canvas.ungroupDraggedTree();
      } else if (canvas.isDragging && canvas.blocks.length === 0) {
        if (canvas.inDropZone()) {
          if (self.onSnap) {
            self.onSnap(draggedElement.node, true, undefined);
          }

          canvas.toggleDragging(false);
          canvas.drop();
        } else {
          canvas.cancelDrop();
        }
      } else if (canvas.isDragging || canvas.isRearranging) {
        const snapped = canvas.blocks.find((block) => {
          if (canvas.inSnapZoneFor(block)) {
            canvas.toggleDragging(false);

            if (!canvas.isRearranging) {
              if (self.onSnap) {
                self.onSnap(draggedElement.node, false, block);
              }

              snap(block);
            } else {
              snap(block);
            }

            return true;
          }

          return false;
        });

        if (!snapped) {
          if (canvas.isRearranging) {
            canvas.toggleRearranging(false);
            // TODO: Determine if we need to do more than clear out `draggedTree`
            // blocksTemp = []
            canvas.draggedTree.splice(0);
          }

          canvas.toggleDragging(false);
          canvas.cancelDrop();
        }
      }
    }

    function touchDone() {
      canvas.toggleDraggingBlock(false);
    }

    document.addEventListener('mouseup', touchDone, false);

    document.addEventListener('mouseup', endDrag, false);
    document.addEventListener('touchend', endDrag, false);

    function fixOffset() {
      const { previousOffsetLeft } = canvas.state;

      if (previousOffsetLeft) {
        if (previousOffsetLeft >= canvas.position().left) {
          return;
        }

        canvas.toggleLastEvent(false);

        canvas.blocks.forEach((block) => {
          const { id, x, width, parent } = block;
          const blockElement = canvas.findBlockElement(id)!;
          const arrowElement = blockElement.arrow();

          blockElement.styles({ left: `${x - width / 2 - previousOffsetLeft - 20}px` });
          block.x = blockElement.position().left + width / 2;

          if (parent === -1) {
            return;
          }

          const parentX = canvas.blocks.find(bblock => (bblock.id === parent))!.x;
          const arrowX = x - parentX;

          arrowElement.styles({
            left: `${(arrowX < 0)
              ? x - 5 - canvas.position().left
              : parentX - 20 - canvas.position().left}px`,
          });
        });

        canvas.setState({ previousOffsetLeft: 0 });
      }
    }

    function moveBlock(event) {
      handleCoordinates(event);

      if (canvas.isDraggingBlock) {
        canvas.toggleRearranging(true);
        canvas.toggleDragger(true);
        canvas.groupDraggedTree();

        if (canvas.blocks.length > 1) {
          rearrangeMe();
        }

        if (canvas.isLastEvent) {
          fixOffset();
        }

        canvas.toggleDraggingBlock(false);
      }

      if (canvas.isDragging) {
        canvas.updateDragPosition();
      } else if (canvas.isRearranging) {
        canvas.updateRearrangePosition();
      }

      if (!canvas.isDragging && !canvas.isRearranging) {
        return;
      }

      const snapped = canvas.blocks.find((block) => {
        if (canvas.inSnapZoneFor(block)) {
          canvas.showIndicator(true, block);

          return true;
        }

        return false;
      });

      if (!snapped) {
        canvas.showIndicator(false);
      }
    }

    document.addEventListener('mousemove', moveBlock, false);
    document.addEventListener('touchmove', moveBlock, false);
  }
}

export default Flowy;
