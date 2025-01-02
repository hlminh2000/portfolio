import { useEffect, useRef } from "react"


export const FloadingBlob = ( ) => {
  const blobRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const current = blobRef.current
    if (!current) return
    const onMouseMove = (e: MouseEvent) => {
      current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    }
    const onTouchMove = (e: TouchEvent) => {
      current.style.transform = `translate3d(calc(${e.touches.item(0)?.clientX}px - 50%), calc(${e.touches.item(0)?.clientY}px - 50%), 0)`
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [])
  return <div id="blob" ref={blobRef} />
}