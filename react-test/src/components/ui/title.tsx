type Props = {
    children: any;
}

export default function Title({children}: Props) {
  return (
    <h2 className="font-bold text-2xl my-2">{children}</h2>
  )
}
