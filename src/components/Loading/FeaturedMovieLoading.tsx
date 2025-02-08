import { FunctionComponent } from "react";
import MovieDataLoading from "./MovieDataLoading";
import ContentLoading from "./ContentLoading";
import PlayButtonLoading from "./PlayButtonLoading";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedMovieLoading: FunctionComponent = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="min-h-[500px] py-20 px-5 sm:px-10 md:px-20 lg:px-28"
        exit={{ opacity: 0 }}
      >
        <div className="max-w-xl flex gap-8 flex-col">
          <MovieDataLoading />

          <ContentLoading className="h-10" />

          <div className="flex flex-col w-full gap-2">
            <ContentLoading className="w-3/4" />
            <ContentLoading className="w-4/5" />
            <ContentLoading className="w-2/5" />
          </div>

          <PlayButtonLoading />
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
export default FeaturedMovieLoading
