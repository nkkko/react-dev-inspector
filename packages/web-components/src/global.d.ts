declare module 'global' {
  global {
    interface Window {
      __REACT_DEVTOOLS_TARGET_WINDOW__: Window,
    }
  }
}


declare module '*/tailwind.less' {
  const stylesheet: string;
  export default stylesheet;
}
