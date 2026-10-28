type Props = {
  children: any;
}
export default function ExportButton({children}: Props) {
  return (
    <button className="py-1 px-3 rounded-xl bg-green-600 text-white my-2 tracking-wide flex gap-1 items-center">{children}</button>
  )
}
