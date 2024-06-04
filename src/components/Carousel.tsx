import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"

interface CarouselProps {
  children: ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleCarouselWidthChange() {
      const newWidth = carousel.current!.scrollWidth - carousel.current!.offsetWidth
      
      if (Number.isFinite(newWidth)) { // is a valid number?
        setWidth(newWidth)
      }
    }

    handleCarouselWidthChange()
    window.addEventListener('resize', handleCarouselWidthChange)

    return () => {
      window.removeEventListener('resize', handleCarouselWidthChange)
    }
  }, [])

  return (
    <div
      ref={carousel}
      className="cursor-grab overflow-hidden active:cursor-grabbing w-auto relative"
    >
      <motion.div
        className="inline-flex w-auto gap-8 py-4 px-3 sm:px-5 md:px-7 xl:px-9"
        drag="x"
        dragConstraints={{ right: 0, left: - width }}
        children={children}
      ></motion.div>
    </div>
  ) 
}
