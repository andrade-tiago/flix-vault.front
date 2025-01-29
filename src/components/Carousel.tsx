import { isNumeric } from "@/utils/is-numeric"
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
      
      if (isNumeric(newWidth)) {
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
      <span className="block h-full w-20 absolute top-0 left-0 z-10 bg-gradient-to-r from-gray-950" />

      <motion.div
        className="inline-flex w-auto gap-10 py-4 px-3 sm:px-5 md:px-7 xl:px-9"
        drag="x"
        dragConstraints={{ right: 0, left: - width }}
        children={children}
      ></motion.div>

      <span className="block h-full w-20 absolute top-0 right-0 z-10 bg-gradient-to-l from-gray-950" />
    </div>
  ) 
}
