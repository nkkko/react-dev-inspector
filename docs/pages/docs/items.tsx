import { Steps } from '@components/stepper'


export const ConfigureSteps = () => (
  <Steps
    steps={[
      {
        index: 0,
        title: (
          <span>
            Optional <br className='block sm:hidden' /> Compiler
          </span>
        ),
        active: false,
      },
      {
        index: 1,
        title: (
          <span>
            Inspector <br className='block sm:hidden' /> Component
          </span>
        ),
        active: true,
      },
      {
        index: 2,
        title: (
          <span>
            Dev Server <br className='block sm:hidden' /> Middleware
          </span>
        ),
      },
    ]}
  />
)

