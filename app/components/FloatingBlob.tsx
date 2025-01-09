"use client"
import { useEffect, useRef } from "react"
import _ from "lodash"
import { MotionDiv } from './Motion';

export const FloatingBlob = ( ) => {
  const blobRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const current = blobRef.current
    if (!current) return
    const onTouchMove = _.throttle((e: TouchEvent) => {
      current.style.left = `${e.touches.item(0)?.clientX}px`
      current.style.top = `${e.touches.item(0)?.clientY}px`
    }, 100)
    const onMouseMove = _.throttle((e: MouseEvent) => {
      current.style.left = `${e.clientX}px`
      current.style.top = `${e.clientY}px`
    }, 100)
    document.addEventListener('touchmove', onTouchMove)
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <MotionDiv initial={{opacity: 0}} whileInView={{opacity: 1}} id="blob" ref={blobRef} />
}