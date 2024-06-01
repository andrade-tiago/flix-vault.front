import { ReactNode } from "react"

interface MediaDataItemProps {
  children: ReactNode
}

export default function MediaDataItem({ children }: MediaDataItemProps) {
  return (
    <li>
      {children}
    </li>
  )
}
