import { AnimatePresence, motion } from 'framer-motion'

function MovieCardLoading() {
  return (
    <AnimatePresence>
      <motion.div
        className="w-44 flex flex-col gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >
        <div className="w-full h-64 rounded-xl bg-gray-600/30 animate-pulse" />

        <div className="w-2/3 h-4 bg-gray-600/30 rounded-md animate-pulse" />

        <div className="flex justify-between">
          <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
          <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
          <div className="h-4 w-16 bg-gray-600/30 rounded-md animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default MovieCardLoading
