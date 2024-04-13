import {
  createContext,
  useContext,
} from 'solid-js'


export const PopupContext = createContext<{
  popupRoot: HTMLElement | undefined;
}>({
  popupRoot: document.body,
})

export const usePopupContext = () => useContext(PopupContext)
