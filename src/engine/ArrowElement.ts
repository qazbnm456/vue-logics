import * as Logics from '../types/vue-logics';

class ArrowElement implements Logics.ArrowElement.ArrowElementInterface {
  blockElement: Logics.BlockElement.BlockElementInterface;
  node: HTMLDivElement;
  window: Window;
  document: HTMLDivElement;

  static find = (blockElement): Logics.ArrowElement.ArrowElementInterface | null => {
    const { document } = blockElement.window;
    const node = document.querySelector(`.arrowid[value='${blockElement.id}']`);

    return (node !== null) ? new ArrowElement(blockElement, node.parentNode) : null;
  }

  constructor(blockElement, node) {
    this.blockElement = blockElement;
    this.node = node;
    this.window = blockElement.window;
    this.document = blockElement.document;
  }

  html = (html): string => {
    if (html !== undefined) {
      this.node.innerHTML = html;
    }

    return this.node.innerHTML;
  }

  position = (): Logics.ArrowElement.Position => {
    const { top, left } = this.node.getBoundingClientRect();

    return {
      top: top + this.window.scrollY,
      left: left + this.window.scrollX,
    };
  }

  styles = styles => Object.assign(this.node.style, styles);

  remove = () => {
    this.node.remove();
  }
}

export default ArrowElement;
