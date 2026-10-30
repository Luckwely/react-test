type Props = {
    children: any
}

export default function SubTitle({children}: Props) {
  return (
    <h4 className="text-gray-400 mt-2 underline tracking-wider">{children}</h4>
  )
}
