import { FunctionComponent } from "react";
import ContentLoading from "./ContentLoading";
import { twMerge } from "tailwind-merge";

type MovieDataLoadingProps = {
  containerClassName?: string
}

const MovieDataLoading: FunctionComponent<MovieDataLoadingProps> = (props) => {
  return (
    <div className={twMerge("flex gap-4", props.containerClassName)}>
      <ContentLoading className="w-10" />
      <ContentLoading className="w-10" />
      <ContentLoading className="w-16" />
    </div>
  )
}
export default MovieDataLoading
