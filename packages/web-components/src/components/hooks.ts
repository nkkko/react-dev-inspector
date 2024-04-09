import {
  createContext,
  useContext,
} from 'solid-js'

export const ShadowRootContext = createContext<{
  host: HTMLElement | undefined;
}>({
  host: document.body,
})

export const useShadowRootContext = () => useContext(ShadowRootContext)
