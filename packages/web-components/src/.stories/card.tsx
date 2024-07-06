import type { JSX } from 'solid-js'
import {
  Button,
  Card as CardContainer,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components'


export const Card = ({
  title = 'Title',
  description = 'Description',
  cancelText = 'Cancel',
  onCancel,
  confirmText = 'OK',
  onConfirm,
  children,
}: {
  title?: JSX.Element;
  description?: JSX.Element;
  cancelText?: JSX.Element;
  onCancel?: () => void;
  confirmText?: JSX.Element;
  onConfirm?: () => void;
  children?: JSX.Element;
}) => (
  <CardContainer class='w-96'>
    <CardHeader>
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardHeader>

    <CardContent>
      {children}
    </CardContent>

    <CardFooter class='flex justify-between'>
      <Button
        variant='outline'
        onClick={onCancel}
      >
        {cancelText}
      </Button>
      <Button
        onClick={onConfirm}
      >
        {confirmText}
      </Button>
    </CardFooter>
  </CardContainer>
)
