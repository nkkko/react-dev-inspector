/// <reference path='./elements.d.ts' />

export * from './Overlay'
export * from './InspectContextPanel'
export type {
  ItemInfo as ElementItemInfo,
  TagItem,
} from './components'
export {
  type Point,
  type Size,
  type Box,
  type Rect,
  type BoxSizing,
  getBoundingRect,
} from './floating'
