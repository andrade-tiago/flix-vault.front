import { AnimatePresence, motion } from "framer-motion"

export default function MoviePosterLoading() {
  return (
    <AnimatePresence>
      <motion.div
        className="min-w-60 max-w-60 rounded-lg min-h-96 max-h-96 bg-gray-900 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  )
}
