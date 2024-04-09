
import {
  Copy,
} from 'lucide-solid'
import {
  cn,
  styled,
  css,
} from '#utils'
import {
  IconBox,
} from './IconBox'
import {
  VSCode,
  WebStorm,
} from './logos'

/**
 * `h-12` in ElementItem component
 */
export const ELEMENT_ITEM_HEIGHT = 48

export interface ElementItemProps<Item extends ItemInfo = ItemInfo> {
  class?: string | undefined;
  style?: string;
  item: Item;
  index: number;
  onClickItem?: (item: Item) => void;
  onClickEditor?: (params: {
    editor: EditorType;
    item: Item;
  }) => void | Promise<void>;
  onHoverItem?: (item: Item) => void;
}

export const ElementItem = <Item extends ItemInfo = ItemInfo>(props: ElementItemProps<Item>) => {
  const onClickItem = () => props.onClickItem?.(props.item)
  const onHoverItem = () => props.onHoverItem?.(props.item)

  return (
    <S.ItemContainerRow
      class={props.class}
      style={props.style}
      onClick={onClickItem}
      onPointerEnter={onHoverItem}
    >
      <S.MajorInfo>
        <S.TitleLabelRow>
          <S.Text
            class={`text-[13px] font-bold`}
            dir='rtl'
          >
            &lrm;{props.item.title}&lrm;
          </S.Text>

          <S.CopyIcon
            onClick={(event) => {
              event.stopPropagation()
              event.preventDefault()
              copyText(props.item.title)
            }}
          >
            <Copy class={`w-3 stroke-1 transition-all duration-100`} />
          </S.CopyIcon>
        </S.TitleLabelRow>


        <S.TitleLabelRow>
          <S.Text
            class={cn(
              `text-[11px] text-text-2`,
              !props.item.subtitle && 'text-text-3',
            )}
            dir='rtl'
          >
              &lrm;{props.item.subtitle || '—'}&lrm;
          </S.Text>
          {Boolean(props.item.subtitle) && (
            <S.CopyIcon
              onClick={(event) => {
                event.stopPropagation()
                event.preventDefault()
                copyText(props.item.subtitle!)
              }}
            >
              <Copy class={`w-3 stroke-1 transition-all duration-100`} />
            </S.CopyIcon>
          )}
        </S.TitleLabelRow>
      </S.MajorInfo>

      <aside
        class={`
          hidden flex-none flex-col items-stretch justify-stretch text-text-2 text-xs h-10
        `}
      >
        <S.RowInRight>
          #{props.index}
        </S.RowInRight>

        <S.RowInRight>
          <S.EditorIcon
            onClick={(event) => {
              event.stopPropagation()
              event.preventDefault()
              props.onClickEditor?.({
                item: props.item,
                editor: 'VSCode',
              })
            }}
          >
            <VSCode class={`w-3 transition-all duration-100`} />
          </S.EditorIcon>
          <S.EditorIcon
            onClick={(event) => {
              event.stopPropagation()
              event.preventDefault()
              props.onClickEditor?.({
                item: props.item,
                editor: 'WebStorm',
              })
            }}
          >
            <WebStorm class={`w-3 transition-all duration-100`} />
          </S.EditorIcon>
        </S.RowInRight>
      </aside>
    </S.ItemContainerRow>
  )
}

const S = {
  ItemContainerRow: styled.section({
    class: `
      flex flex-auto items-center justify-stretch rounded
      h-12 whitespace-nowrap
      cursor-default hover:bg-bg-hover-2 active:bg-bg-active-1
      max-w-full px-2 gap-1 text-text-1 font-mono
      [&:hover>aside]:flex
    `,
    style: css`
      flex-flow: row nowrap;
    `,
  }),

  MajorInfo: styled.div({
    class: `
      flex [flex:1_1_100%] flex-col justify-stretch items-stretch
      overflow-hidden whitespace-nowrap text-ellipsis
      max-w-full h-10
    `,
  }),

  TitleLabelRow: styled.div({
    class: `
      flex flex-1 items-center justify-between gap-1.5 text-xs
      [&:hover>.iconbox]:flex
    `,
  }),

  Text: styled.span({
    class: `text-left flex-auto overflow-hidden whitespace-nowrap text-ellipsis`,
  }),

  CopyIcon: styled(IconBox, {
    class: `
      hidden size-5 text-text-1 hover:bg-bg-hover-3 hover:text-text-1
      [&:hover>svg]:w-3.5 [&:hover>svg]:[stroke-width:1.5px]
    `,
  }),

  EditorIcon: styled(IconBox, {
    class: `size-5 hover:bg-bg-hover-3 [&:hover>*]:w-4`,
  }),

  RowInRight: styled.div({
    class: `flex flex-1 items-center justify-end gap-0.5 text-xs text-text-3 select-none`,
  }),
}


export interface ItemInfo {
  title: string;
  subtitle?: string;
  tags?: (string | undefined | null)[];
  codeInfo?: CodeInfo;
}

interface CodeInfo {
  lineNumber: string;
  columnNumber: string;
  /**
   * code source file relative path to dev-server cwd(current working directory)
   * need use with `@react-dev-inspector/babel-plugin`
   */
  relativePath?: string;
  /**
   * code source file absolute path
   * just need use with `@babel/plugin-transform-react-jsx-source` which auto set by most framework
   */
  absolutePath?: string;
}

type EditorType = 'VSCode' | 'WebStorm'

const copyText = (text: string) => {
  return navigator.clipboard.writeText(text)
}
