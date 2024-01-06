import type {
  InspectorOverlayElement,
} from './Overlay'

declare global {
  interface HTMLElementTagNameMap {
    'inspector-overlay': InspectorOverlayElement;
  }

  namespace JSX {
    interface IntrinsicElements {
      'inspector-overlay': HTMLAttributes;
    }
  }
}
