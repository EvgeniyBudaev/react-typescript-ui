import type { VirtualElement } from "@popperjs/core";

export const getVirtualReference = (x: number, y: number): VirtualElement => ({
  getBoundingClientRect() {
    return {
      x,
      y,
      top: y,
      left: x,
      bottom: y,
      right: x,
      width: 0,
      height: 0,
      toJSON() {
        return JSON.stringify(this);
      },
    };
  },
});
