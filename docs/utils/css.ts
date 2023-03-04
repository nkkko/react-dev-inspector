// only use for IDE code highlight
export const css = (temp: TemplateStringsArray, ...values: any[]): string => (
  temp
    .flatMap((element, index) => [element, values[index]])
    .filter(Boolean)
    .join('')
)
