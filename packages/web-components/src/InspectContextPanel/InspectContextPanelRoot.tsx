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

export const InspectContextPanelRoot: ComponentType<Record<string, never>> = (_props, { element }) => {
  type Store = Partial<InspectContextPanelShowParams> & {
    host?: HTMLElement;
    setHost: (host: HTMLElement) => void;
    initWithParams: (params: InspectContextPanelShowParams) => void;
    removePanel: () => void;
  }

  const store = createStore<Store>(({ set }) => ({
    setHost: (host) => set({ host }),
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

  const getHost = () => (element.renderRoot as ShadowRoot)?.host as HTMLElement & {
    style: CSSStyleDeclaration;
  } & InspectContextPanelExpose | undefined

  onMount(() => {
    const host = getHost()
    if (host) {
      host.show = show
      host.hide = hide
      store.setHost(host)
    }
  })

  return (
    <>
      {/**
        * - when render in storybook, tailwind.css is build in storybook
        * - when build the package, tailwind.css is compile and extract to here by postcss
        */
      }
      <style>
        {css`@import './tailwind.css';`}
      </style>

      <Show
        when={(
          store.host
          && store.initialPosition
          && store.panelParams
        )}
      >
        <PopupContext.Provider
          value={{
            popupRoot: store.host!,
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

/**
 * that's also no-side-effect for tree-shaking,
 * because it will call again in `ContextPanel` constructor
 */
customElement('inspect-context-panel', InspectContextPanelRoot)
