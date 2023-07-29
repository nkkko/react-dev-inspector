
import type { HTMLAttributes, RefAttributes } from 'react'
import { InspectorOverlay } from './Overlay'
import { InspectorOverlayRect } from './OverlayRect'
import { InspectorOverlayTip } from './OverlayTip'

declare global {
  interface HTMLElementTagNameMap {
    'inspector-overlay': InspectorOverlay;
    'inspector-overlay-rect': InspectorOverlayRect;
    'inspector-overlay-tip': InspectorOverlayTip;
  }

  namespace JSX {
    interface IntrinsicElements {
      'inspector-overlay': RefAttributes<InspectorOverlay> & HTMLAttributes;
      'inspector-overlay-rect': RefAttributes<InspectorOverlayRect> & HTMLAttributes;
      'inspector-overlay-tip': RefAttributes<InspectorOverlayTip> & HTMLAttributes;
    }
  }
}
