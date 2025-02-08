import { FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

type ContentLoadingProps = {
  className?: string
}

const ContentLoading: FunctionComponent<ContentLoadingProps> = ({ className }) => {
  return (
    <div className={twMerge("h-4 w-1/2 bg-gray-600/30 rounded-md animate-pulse", className)} />
  )
}
export default ContentLoading
