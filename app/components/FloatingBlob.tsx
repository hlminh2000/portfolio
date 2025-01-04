"use client"
import { useEffect, useRef } from "react"
import _ from "lodash"

export const FloatingBlob = ( ) => {
  const blobRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const current = blobRef.current
    if (!current) return
    const onMouseMove = _.throttle((e: MouseEvent) => {
      current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    }, 100)
    const onTouchMove = _.throttle((e: TouchEvent) => {
      current.style.transform = `translate3d(calc(${e.touches.item(0)?.clientX}px - 50%), calc(${e.touches.item(0)?.clientY}px - 50%), 0)`
    }, 100)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [])
  return <div id="blob" ref={blobRef} />
}