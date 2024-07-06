import type {
  InspectAgent,
  InspectChainGenerator,
} from '../types'


export function * elementsChainGenerator<Element = unknown>({
  agent,
  agents,
  element,
  generateElement,
}: {
  agent: InspectAgent<Element>;
  agents: InspectAgent<Element>[];
  element: Element;
  generateElement: <Element = unknown>(agent: InspectAgent<Element>, element: Element) => InspectChainGenerator<Element>;
}): InspectChainGenerator<Element> {
  const generator = generateElement(agent, element)
  while (true) {
    const next = generator.next()
    if (!next.done) {
      yield next.value
      continue
    }

    if (!next.value) {
      return
    }

    for (const agent of agents) {
      if (!agent.isAgentElement(next.value)) {
        continue
      }
      yield * elementsChainGenerator({
        agent,
        agents,
        element: next.value,
        generateElement,
      })
      return
    }

    return
  }
}
