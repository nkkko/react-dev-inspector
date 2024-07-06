import type { Meta } from 'storybook-solidjs'

// https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
export default {
  title: 'Solid UI',
} satisfies Meta

import { Button } from "@stories/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@stories/components/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip
      openDelay={200}
    >
      <TooltipTrigger as={Button<"button">} variant="outline">
        Trigger
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  )
}
