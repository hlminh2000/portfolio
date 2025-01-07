"use client"
import { isMobile } from 'react-device-detect';
import { useEffect, useRef } from "react"
import _ from "lodash"

export const FloatingBlob = ( ) => {
  const blobRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const current = blobRef.current
    if (!current) return
    console.log("isMobile: ", isMobile)
    if (isMobile) {
      const onTouchMove = _.throttle((e: TouchEvent) => {
        // current.style.transform = `translate3d(calc(${e.touches.item(0)?.clientX}px - 50%), calc(${e.touches.item(0)?.clientY}px - 50%), 0)`
        current.style.left = `${e.touches.item(0)?.clientX}px`
        current.style.top = `${e.touches.item(0)?.clientY}px`
      }, 100)
      return () => document.removeEventListener('touchmove', onTouchMove)
    } else {
      const onMouseMove = _.throttle((e: MouseEvent) => {
        // current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        current.style.left = `${e.clientX}px`
        current.style.top = `${e.clientY}px`
      }, 100)
      document.addEventListener('mousemove', onMouseMove)
      return () => document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <div id="blob" ref={blobRef} />
}