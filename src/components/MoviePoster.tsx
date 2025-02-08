import { FunctionComponent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MoviePosterProps = {
  imgURL: string
}

const MoviePoster: FunctionComponent<MoviePosterProps> = (props) => {
  return (
    <AnimatePresence>
      <motion.img
        src={props.imgURL}
        className="min-w-60 max-w-60 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
      />
    </AnimatePresence>
  )
}
export default MoviePoster
