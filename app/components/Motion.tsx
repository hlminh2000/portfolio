"use client"

import { motion, useInView } from 'motion/react'
import { ComponentProps, ReactNode, useEffect, useRef } from 'react'

export const MotionSection = (props: ComponentProps<typeof motion.section>) => <motion.section {...props} />
export const MotionDiv = (props: ComponentProps<typeof motion.div>) => <motion.div {...props} />
export const MotionNav = (props: ComponentProps<typeof motion.nav>) => <motion.nav {...props} />
export const MotionMain = (props: ComponentProps<typeof motion.main>) => <motion.main {...props} />

export const RevealOnScroll = ({children}: {children: ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null);

  return <MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} ref={ref}>{children}</MotionDiv>
}