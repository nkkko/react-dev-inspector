import {
  useEffect,
  useRef,
  type MutableRefObject,
} from 'react'


export const useMousePosition = (): MutableRefObject<{ x: number; y: number }> => {
  const mouseRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const recordMousePoint = ({ clientX, clientY }: MouseEvent) => {
    mouseRef.current.x = clientX
    mouseRef.current.y = clientY
  }

  useEffect(() => {
    document.addEventListener('mousemove', recordMousePoint, true)
    return () => {
      document.removeEventListener('mousemove', recordMousePoint, true)
    }
  }, [])

  return mouseRef
}
