'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { cn } from '@/utils/cn'

export const Pointer = ({
  children,
  className,
  name
}: {
  children: React.ReactNode
  className?: string
  name: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  return (
    <div
      onMouseLeave={() => setIsInside(false)}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
          const scrollX = window.scrollX
          const scrollY = window.scrollY
          x.set(e.clientX - rect.left + scrollX)
          y.set(e.clientY - rect.top + scrollY)
        }
      }}
      style={{
        cursor: 'none'
      }}
      ref={ref}
      className={cn('relative', className)}>
      <AnimatePresence>{isInside && <FollowPointer x={x} y={y} name={name} />}</AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({ x, y, name }: { x: any; y: any; name: string }) => {
  return (
    <>
      <motion.div
        className="absolute z-50 h-4 w-4 rounded-full"
        style={{
          top: y,
          left: x,
          pointerEvents: 'none'
        }}
        initial={{
          scale: 1,
          opacity: 1
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        exit={{
          scale: 0,
          opacity: 0
        }}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <div className="w-fit rounded-full bg-sky-500 px-2 py-1 text-white">{name || 'Tony'}</div>
      </motion.div>
    </>
  )
}

export default Pointer;