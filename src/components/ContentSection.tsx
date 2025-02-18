import { FunctionComponent, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ContentSectionProps = HTMLAttributes<HTMLElement>

const ContentSection: FunctionComponent<ContentSectionProps> = (props) => {
  return (
    <section {...props} className={twMerge(
      "px-3 sm:px-5 md:px-7 xl:px-9 flex flex-col gap-2",
      props.className,
    )} />
  )
}
export default ContentSection
