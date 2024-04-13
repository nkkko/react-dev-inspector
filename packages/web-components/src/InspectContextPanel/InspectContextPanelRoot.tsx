import {
  onMount,
  Show,
} from 'solid-js'
import {
  customElement,
  type ComponentType,
} from 'solid-element'
import {
  PopupContext,
  type DragPanelParams,
} from '#components'
import {
  css,
  createStore,
} from '#utils'
import tailwindRoot from '../tailwind.css'
import {
  InspectPanel,
  type InspectPanelProps,
} from './InspectPanel'


export interface InspectContextPanelExpose {
  show: (params: InspectContextPanelShowParams) => void;
  hide: () => void;
}

export interface InspectContextPanelElement extends HTMLElement, InspectContextPanelExpose {}

export interface InspectContextPanelShowParams extends DragPanelParams {
  panelParams: InspectPanelProps;
}

type HostElement = HTMLElement & {
  style: CSSStyleDeclaration;
} & InspectContextPanelExpose

export const InspectContextPanelRoot: ComponentType<Record<string, never>> = (_props, { element }) => {
  type Store = Partial<InspectContextPanelShowParams> & {
    host?: HTMLElement;
    shadowRoot?: ShadowRoot;
    setHost: (roots: {
      host: HTMLElement;
      shadowRoot: ShadowRoot;
    }) => void;
    initWithParams: (params: InspectContextPanelShowParams) => void;
    removePanel: () => void;
  }

  const store = createStore<Store>(({ set }) => ({
    setHost: (roots) => set(roots),
    initWithParams: (params) => set(params),
    removePanel: () => set({
      panelParams: undefined,
      initialPosition: undefined,
    }),
  }))

  const show: InspectContextPanelExpose['show'] = (params) => {
    store.initWithParams(params)
  }

  const hide: InspectContextPanelExpose['hide'] = () => {
    store.removePanel()
  }

  onMount(() => {
    const shadowRoot = element.renderRoot as ShadowRoot | undefined
    const host = shadowRoot?.host as HostElement | undefined

    if (shadowRoot && host) {
      host.show = show
      host.hide = hide
      store.setHost({
        shadowRoot,
        host,
      })
    }
  })

  return (
    <>
      {/**
        * - when render in storybook, tailwind.css is build in storybook
        * - when build the package, tailwind.css is compile and extract to here by rollup & postcss
        */
      }
      <style>
        {tailwindRoot}
        {hostStyles}
      </style>

      <Show
        when={(
          store.shadowRoot
          && store.initialPosition
          && store.panelParams
        )}
      >
        <PopupContext.Provider
          value={{
            popupRoot: store.shadowRoot!,
          }}
        >
          <InspectPanel
            {...store.panelParams!}
            initialPosition={store.initialPosition!}
          />
        </PopupContext.Provider>
      </Show>
    </>
  )
}

const hostStyles = css`
  :host {
    position: fixed;
    bottom: 0;
    right: 0;
  }
`

/**
 * that's also no-side-effect for tree-shaking,
 * because it will call again in `ContextPanel` constructor
 */
customElement('inspect-context-panel', InspectContextPanelRoot)
