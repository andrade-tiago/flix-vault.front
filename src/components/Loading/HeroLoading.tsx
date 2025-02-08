import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import ContentLoading from "./ContentLoading";
import MovieDataLoading from "./MovieDataLoading";
import PlayButtonLoading from "./PlayButtonLoading";

const HeroLoading: FunctionComponent = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="h-[600px] w-full flex justify-center items-center px-2 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
          <ContentLoading className="w-full h-28" />

          <MovieDataLoading />

          <ContentLoading className="h-4 w-24" />

          <div className="flex flex-col w-full items-center gap-2">
            <ContentLoading className="w-3/4" />
            <ContentLoading className="w-4/5" />
            <ContentLoading className="w-2/5" />
            <ContentLoading className="w-1/2" />
          </div>

          <PlayButtonLoading />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default HeroLoading
