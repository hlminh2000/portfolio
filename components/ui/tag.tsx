import { ReactNode } from "react"

export const Tag = (props: {children: ReactNode}) => {
  return (
    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400 text-nowrap">
      {props.children}
    </span>
  )
}