import { AnimatePresence, motion } from 'framer-motion'
import ContentLoading from './ContentLoading'
import MovieDataLoading from './MovieDataLoading'

function MovieCardLoading() {
  return (
    <AnimatePresence>
      <motion.div
        className="w-44 flex flex-col gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >
        <ContentLoading className="w-full h-64 rounded-xl" />

        <ContentLoading className="w-2/3 h-4" />

        <MovieDataLoading />
      </motion.div>
    </AnimatePresence>
  )
}
export default MovieCardLoading
