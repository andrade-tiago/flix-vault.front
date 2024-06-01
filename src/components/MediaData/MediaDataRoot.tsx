import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MediaDataRootProps {
  children: ReactNode
  className?: string
}

export default function MediaDataRoot({ children, className }: MediaDataRootProps) {
  return (
    <ul className={twMerge('flex w-max justify-between gap-2 items-baseline', className)}>
      {children}
    </ul>
  )
}
