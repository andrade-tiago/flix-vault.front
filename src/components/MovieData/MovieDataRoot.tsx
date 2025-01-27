import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MovieDataRootProps {
  children: ReactNode
  className?: string
}

export default function MovieDataRoot({ children, className }: MovieDataRootProps) {
  return (
    <ul className={twMerge('flex w-max justify-between gap-2 items-baseline', className)}>
      {children}
    </ul>
  )
}
