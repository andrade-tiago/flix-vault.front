import { ReactNode } from "react"

interface MovieDataItemProps {
  children: ReactNode
}

export default function MovieDataItem({ children }: MovieDataItemProps) {
  return (
    <li>
      {children}
    </li>
  )
}
