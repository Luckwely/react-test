import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { skillsSchemType } from "../schema/skills.schema"

type Props = {
  number: number
}

export default function SkillsForm({number}: Props) {
  const { register, formState: { errors } } = useFormContext<skillsSchemType>()
  return (
    <div>
      <SubTitle>Item {number}</SubTitle>
      <div>
        <input {...register("skills")} type="text" placeholder="Ex: photoshop, excel" className="input" />
        {errors.skills && <p role="alert" className="text-red-500">{errors.skills.message}</p>}
      </div>
    </div>
  )
}
