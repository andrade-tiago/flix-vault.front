import { motion, useAnimation } from "framer-motion"
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react"

type CarouselProps = {
  children: ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const carouselWrapper = useRef<HTMLDivElement>(null)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isKeyboardNavigation = useRef(false)
  const offset = useRef(0)
  const [width, setWidth] = useState(0)
  const dragConstraints = useMemo(() => ({ right: 0, left: -width }), [width])

  const handleCarouselWidthChange = useCallback(() => {
    if (!carouselWrapper.current || !carousel.current) { return }

    const newWidth = carousel.current.scrollWidth - carouselWrapper.current.offsetWidth
    setWidth(newWidth)
  }, [])

  const handleFocus = useCallback((event: FocusEvent) => {
    if (
      !isKeyboardNavigation.current
      || !carouselWrapper.current
      || !carousel.current
    ) { return }

    const focusedElement = event.target as HTMLElement
    if (!carousel.current.contains(focusedElement)) { return }

    const containerRect = carouselWrapper.current.getBoundingClientRect()
    const elementRect = focusedElement.getBoundingClientRect()

    const newOffset = offset.current
      + (containerRect.left - elementRect.left)
      + (containerRect.width / 2) - (elementRect.width / 2)

    const clampedOffset = Math.max(-width, Math.min(0, newOffset))
    offset.current = clampedOffset

    controls.start({ x: clampedOffset, transition: { duration: 0.3 } })
  }, [width, controls])

  useEffect(() => {
    handleCarouselWidthChange()
    const resizeObserver = new ResizeObserver(handleCarouselWidthChange)

    if (carouselWrapper.current) {
      resizeObserver.observe(carouselWrapper.current)
    }
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    carousel.current?.addEventListener("focusin", handleFocus)
    return () => carousel.current?.removeEventListener("focusin", handleFocus)
  }, [handleFocus])

  useEffect(() => {
    const handleKeyDown = () => { isKeyboardNavigation.current = true }
    const handleMouseDown = () => { isKeyboardNavigation.current = false }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  return (
    <div
      ref={carouselWrapper}
      className="cursor-grab overflow-hidden active:cursor-grabbing w-full relative"
    >
      <span className="block h-full w-20 absolute top-0 left-0 z-10 bg-gradient-to-r from-gray-950" />

      <motion.div
        ref={carousel}
        className="inline-flex w-auto gap-10 py-4 px-3 sm:px-5 md:px-7 xl:px-9"
        drag="x"
        dragConstraints={dragConstraints}
        animate={controls}
        onDragEnd={(_, info) => offset.current = Math.max(-width, Math.min(0, info.point.x))}
      >
        {children}
      </motion.div>

      <span className="block h-full w-20 absolute top-0 right-0 z-10 bg-gradient-to-l from-gray-950" />
    </div>
  )
}
