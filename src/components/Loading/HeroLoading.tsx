import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const HeroLoading: FunctionComponent = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="h-[600px] w-full flex justify-center items-center pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
          <div className="w-full h-28 rounded-md bg-gray-600/30 animate-pulse" />

          <div className="flex gap-3">
            <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
            <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
            <div className="h-4 w-16 bg-gray-600/30 rounded-md animate-pulse" />
          </div>

          <div className="h-4 w-24 bg-gray-600/30 rounded-md animate-pulse" />

          <div className="flex flex-col w-full items-center gap-2">
            <div className="h-4 w-3/4 bg-gray-600/30 rounded-md animate-pulse" />
            <div className="h-4 w-4/5 bg-gray-600/30 rounded-md animate-pulse" />
            <div className="h-4 w-2/5 bg-gray-600/30 rounded-md animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-600/30 rounded-md animate-pulse" />
          </div>

          <div className="h-11 w-36 bg-gray-600/30 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default HeroLoading
