import type { MouseEventHandler } from "react"

type Props = {
    children: any
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonRemove({children, onClick}: Props) {
  return (
    <button type="button" onClick={onClick} className="px-3 py-1 bg-red-500 text-white rounded-full flex items-center gap-1 my-2">{children}</button>
  )
}
