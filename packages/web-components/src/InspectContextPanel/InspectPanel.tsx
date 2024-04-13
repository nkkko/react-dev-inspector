import {
  Switch,
  Match,
} from 'solid-js'
import {
  type ItemInfo,
  ContextPanel,
  type DragPanelParams,
} from '#components'
import {
  createStore,
} from '#utils'
import {
  ElementInspectPanel,
} from './ElementInspectPanel'
import {
  PanelType,
  ElementChainMode,
  type ElementInfoGeneratorGetter,
  type EditorType,
} from './types'


export interface InspectPanelProps<Item extends ItemInfo = ItemInfo> {
  renderLayers: ElementInfoGeneratorGetter<Item>[];
  sourceLayers: ElementInfoGeneratorGetter<Item>[];
  onHoverItem?: (item: Item | null) => void;
  onClickItem?: (item: Item) => void;
  onClickEditor?: (params: {
    item: Item;
    editor: EditorType;
  }) => void | Promise<void>;
}

export const InspectPanel = <Item extends ItemInfo = ItemInfo>(props: InspectPanelProps<Item> & DragPanelParams) => {
  const store = createStore<InspectPanelStore>(({ set }) => ({
    panelType: PanelType.Elements,
    onPanelTypeChange: (type) => set({ panelType: type }),
    elementChainMode: ElementChainMode.Render,
    onChangeChainMode: (mode) => set({ elementChainMode: mode }),
  }))

  const elementLayers = () => {
    const layers = {
      [ElementChainMode.Render]: () => props.renderLayers,
      [ElementChainMode.Source]: () => props.sourceLayers,
    }
    return layers[store.elementChainMode]() ?? []
  }


  return (
    <ContextPanel
      initialPosition={props.initialPosition}
      spaceBox={props.spaceBox}
      class={`w-[300px] h-96`}
      sizeLimit={{
        minWidth: 160,
        minHeight: 160,
        maxWidth: 800,
        maxHeight: 800,
      }}
    >
      <Switch>
        <Match when={store.panelType === PanelType.Elements}>
          <ElementInspectPanel
            elementChainMode={store.elementChainMode}
            layers={elementLayers()}
            onChangeChainMode={store.onChangeChainMode}
            onClickItem={props.onClickItem}
            onClickEditor={props.onClickEditor}
            onHoverItem={props.onHoverItem}
            // toSettingsPanel={() => {}}
          />
        </Match>
      </Switch>
    </ContextPanel>
  )
}

interface InspectPanelStore {
  panelType: PanelType;
  onPanelTypeChange: (type: PanelType) => void;
  elementChainMode: ElementChainMode;
  onChangeChainMode: (mode: ElementChainMode) => void;
}

