import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

type MovieTitleImgProps = {
  movieTitle: string
  imgURL: string
}

const MovieTitleImg: FunctionComponent<MovieTitleImgProps> = (props) => {
  return (
    <AnimatePresence>
      <motion.img
        src={props.imgURL}
        alt={props.movieTitle}
        title={props.movieTitle}
        className="max-w-full max-h-32 mx-auto shadow-zinc-500 drop-shadow-[0_0_1px_#fff9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: .5, duration: 1 }}
      />
    </AnimatePresence>
  )
}
export default MovieTitleImg
