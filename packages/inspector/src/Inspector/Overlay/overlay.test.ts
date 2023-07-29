import { restraintTipPosition } from './OverlayTip'
import type {
  Box,
  Rect,
} from './types'


class ItemBox implements Box {
  top: number
  left: number
  width: number
  height: number

  static itemSize = 50

  constructor({
    top, left, width, height,
  }: Partial<Rect>) {
    this.top = top ?? 0
    this.left = left ?? 0
    this.width = width ?? ItemBox.itemSize
    this.height = height ?? ItemBox.itemSize
  }

  get right() {
    return this.left + this.width
  }

  get bottom() {
    return this.top + this.height
  }
}


const spaceBox: Box = new ItemBox({
  top: 0,
  left: 0,
  width: 200,
  height: 300,
})


test('common corners', () => {
  const tipSize = {
    width: 100,
    height: 48,
  }

  const cases: Array<{
    /** target element */
    elementBox: Box;
    /** tip element position */
    position: { top: number; left: number };
  }> = [
    // Top-Left corner
    {
      elementBox: new ItemBox({
        top: 0,
        left: 0,
      }),
      position: {
        top: ItemBox.itemSize + 4,
        left: 4,
      },
    },

    // Top-Right corner
    {
      elementBox: new ItemBox({
        top: 0,
        left: spaceBox.width - ItemBox.itemSize,
      }),
      position: {
        top: ItemBox.itemSize + 4,
        left: spaceBox.right - tipSize.width - 4,
      },
    },

    // Bottom-Left corner
    {
      elementBox: new ItemBox({
        top: spaceBox.height - ItemBox.itemSize,
        left: 0,
      }),
      position: {
        top: spaceBox.bottom - ItemBox.itemSize - tipSize.height - 4,
        left: 4,
      },
    },

    // Bottom-Right corner
    {
      elementBox: new ItemBox({
        top: spaceBox.height - ItemBox.itemSize,
        left: spaceBox.width - ItemBox.itemSize,
      }),
      position: {
        top: spaceBox.bottom - ItemBox.itemSize - tipSize.height - 4,
        left: spaceBox.right - tipSize.width - 4,
      },
    },

    // Center
    {
      elementBox: new ItemBox({
        top: (spaceBox.height - ItemBox.itemSize) / 2,
        left: (spaceBox.width - ItemBox.itemSize) / 2,
      }),
      position: {
        top: (spaceBox.height - ItemBox.itemSize) / 2 + ItemBox.itemSize + 4,
        left: (spaceBox.width - ItemBox.itemSize) / 2,
      },
    },

    // Right-Center but not close to space right
    {
      elementBox: new ItemBox({
        top: (spaceBox.height - ItemBox.itemSize) / 2,
        left: spaceBox.width - ItemBox.itemSize * 1.5,
      }),
      position: {
        top: (spaceBox.height - ItemBox.itemSize) / 2 + ItemBox.itemSize + 4,
        left: spaceBox.right - tipSize.width - 4,
      },
    },
  ]

  cases.forEach(({ elementBox, position }) => {
    const result = restraintTipPosition({
      elementBox,
      spaceBox,
      tipSize,
    })
    expect(result).toEqual(position)
  })
})


test('outside space', () => {
  const tipSize = {
    width: 100,
    height: 48,
  }

  const cases: Array<{
    /** target element */
    elementBox: Box;
    /** tip element position */
    position: { top: number; left: number };
  }> = [
    // Top but outside the space
    {
      elementBox: new ItemBox({
        top: -2 * ItemBox.itemSize,
        left: 0,
      }),
      position: {
        top: 0,
        left: 4,
      },
    },

    // Bottom but outside the space
    {
      elementBox: new ItemBox({
        top: spaceBox.height + 2 * ItemBox.itemSize,
        left: spaceBox.width - ItemBox.itemSize,
      }),
      position: {
        top: spaceBox.height - tipSize.height,
        left: spaceBox.right - tipSize.width - 4,
      },
    },

    // Left but outside the space
    {
      elementBox: new ItemBox({
        top: spaceBox.height - ItemBox.itemSize,
        left: -2 * ItemBox.itemSize,
      }),
      position: {
        top: spaceBox.bottom - ItemBox.itemSize - tipSize.height - 4,
        left: 0,
      },
    },

    // Right but outside the space
    {
      elementBox: new ItemBox({
        top: spaceBox.height - ItemBox.itemSize,
        left: spaceBox.width + 2 * ItemBox.itemSize,
      }),
      position: {
        top: spaceBox.bottom - ItemBox.itemSize - tipSize.height - 4,
        left: spaceBox.right - tipSize.width,
      },
    },
  ]

  cases.forEach(({ elementBox, position }) => {
    const result = restraintTipPosition({
      elementBox,
      spaceBox,
      tipSize,
    })
    expect(result).toEqual(position)
  })
})


test('tips more width than space', () => {
  const tipSize = {
    width: 300,
    height: 48,
  }

  const cases: Array<{
    /** target element */
    elementBox: Box;
    /** tip element position */
    position: { top: number; left: number };
  }> = [
    // Center
    {
      elementBox: new ItemBox({
        top: (spaceBox.height - ItemBox.itemSize) / 2,
        left: (spaceBox.width - ItemBox.itemSize) / 2,
      }),
      position: {
        top: (spaceBox.height - ItemBox.itemSize) / 2 + ItemBox.itemSize + 4,
        left: 0,
      },
    },
  ]

  cases.forEach(({ elementBox, position }) => {
    const result = restraintTipPosition({
      elementBox,
      spaceBox,
      tipSize,
    })
    expect(result).toEqual(position)
  })
})


test('element large than space', () => {
  const tipSize = {
    width: 100,
    height: 48,
  }

  const cases: Array<{
    /** target element */
    elementBox: Box;
    /** tip element position */
    position: { top: number; left: number };
  }> = [
    // Full Center
    {
      elementBox: new ItemBox({
        top: 0,
        left: 0,
        width: spaceBox.width,
        height: spaceBox.height,
      }),
      position: {
        top: 4,
        left: 4,
      },
    },

    // Overflow Cover
    {
      elementBox: new ItemBox({
        top: -20,
        left: -20,
        width: spaceBox.width + 40,
        height: spaceBox.height + 40,
      }),
      position: {
        top: 4,
        left: 4,
      },
    },
  ]

  cases.forEach(({ elementBox, position }) => {
    const result = restraintTipPosition({
      elementBox,
      spaceBox,
      tipSize,
    })
    expect(result).toEqual(position)
  })
})
