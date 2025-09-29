"use client"

import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

type ProgressBarProps = {
  percentage: number
  height?: string
  width?: string
  duration?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  height = "8px",
  width = "100%",
  duration = 500,
}) => {
  const [counter, setCounter] = useState(0)
  const rectRef = useRef<HTMLDivElement>(null)

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    let timer: number
    if (inView) {
      let start = 0
      const stepTime = Math.abs(Math.floor(duration / percentage))

      timer = window.setInterval(() => {
        start += 1
        setCounter(start)
        if (rectRef.current) {
          rectRef.current.style.width = `${start}%`
        }
        if (start >= percentage) {
          clearInterval(timer)
        }
      }, stepTime)
    } else {
      setCounter(0)
      if (rectRef.current) rectRef.current.style.width = "0%"
    }

    return () => clearInterval(timer)
  }, [inView, percentage, duration])

  return (
    <div ref={ref} style={{ width }}>
      <div className="flex justify-end text-sm font-medium">
        <span>{counter}%</span>
      </div>
      <div style={{ width: "100%", height, backgroundColor: "black" }}>
        <div
          ref={rectRef}
          className="h-full transition-all ease-out"
          style={{
            width: "0%",
            backgroundColor: "#79B900",
            transition: `width ${duration}ms ease-out`,
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
