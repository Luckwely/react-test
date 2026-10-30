import type { MouseEventHandler } from "react"

type Props = {
    children: any
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonAddMore({children, onClick}: Props) {
  return (
    <button type="button" onClick={onClick} className="px-3 py-1 rounded-full bg-black text-white tracking-wide flex gap-1 items-center my-2">{children}</button>
  )
}
