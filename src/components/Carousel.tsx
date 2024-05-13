import { motion } from "framer-motion"
import { ReactElement, useEffect, useRef, useState } from "react"

interface CarouselProps {
  children: ReactElement | ReactElement[]
}

export default function Carousel({ children }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
  }, [])

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden active:cursor-grabbing w-auto"
    >
      <motion.div
        className="inline-flex w-auto gap-8 p-8"
        drag="x"
        dragConstraints={{ right: 0, left: - width }}
        children={children}
      ></motion.div>
    </motion.div>
  ) 
}
