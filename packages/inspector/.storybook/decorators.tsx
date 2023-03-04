import { Inspector } from '../src'

export const InspectorDecorator = (story) => (
  <Inspector>
    {story()}
  </Inspector>
)

