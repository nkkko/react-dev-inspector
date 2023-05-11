import {
  type ReactNode,
  Fragment,
  Children,
} from 'react'
import * as S from './styles'


/**
 * <Stepper>
 *   <Step index={0}>
 *     Title
 *   </Step>
 *   <Step index={1} active>
 *     Title
 *   </Step>
 * </Stepper>
 */
export const Stepper = ({ children }: {
  children: ReactNode;
}) => (
  <S.StepContainer>
    {Children.map(children, (step, index) => (
      <Fragment key={`item-${index}`}>
        {step}
        <S.StepDivider />
      </Fragment>
    ))}
  </S.StepContainer>
)

export const Step = ({
  index,
  active,
  link,
  children,
}: {
  index?: number | ReactNode;
  active?: boolean;
  link?: string;
  children: ReactNode;
}) => (
  <S.StepItem
    data-active={active || null}
    href={!active ? link : undefined}
  >
    <span
      className='flex justify-start items-center'
    >
      {
        (typeof index === 'number')
          ? (
            <S.StepIndex
              data-active={active || null}
            >
              {index}
            </S.StepIndex>
          )
          : index
      }
      <div>{children}</div>
    </span>
  </S.StepItem>
)
