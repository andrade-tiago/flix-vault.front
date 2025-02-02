import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon: IconType
}

export default function IconButton({ className, Icon, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "border border-w-[1px] border-gray-700 rounded p-2",
        "disabled:text-gray-800 disabled:border-gray-800",
        className,
      )}
      {...props}
    >
      <Icon />
    </button>
  )
}
