import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { experienceSchemType } from "../schema/experience.schema"

type Props = {
  number: number
}

export default function ExperienceForm({number}:Props) {
  const { register, formState: { errors } } = useFormContext<experienceSchemType>()
  return (
    <div>
      <SubTitle>Item ({number})</SubTitle>
      <div>
        <label>Your company*</label>
        <input {...register("company")} type="text" placeholder="Ex: Connecta" className="input" />
        {errors.company && <p role="alert" className="text-red-500">{errors.company.message}</p>}
      </div>
      <div>
        <label>Your role*</label>
        <input {...register("role")} type="text" placeholder="Ex: Responsable" className="input" />
        {errors.role && <p role="alert" className="text-red-500">{errors.role.message}</p>}
      </div>
      <div>
        <label>Start Date*</label>
        <input {...register("startDate")} type="date" className="input" />
        {errors.startDate && <p role="alert" className="text-red-500">{errors.startDate.message}</p>}
      </div>
      <div>
        <label>End Date*</label>
        <input {...register("endDate")} type="date" className="input" />
        {errors.endDate && <p role="alert" className="text-red-500">{errors.endDate.message}</p>}
      </div>
      <div>
        <label>Description*</label>
        <textarea {...register("description")} name="" id="" className="input" />
        {errors.description && <p role="alert" className="text-red-500">{errors.description.message}</p>}
      </div>
    </div>
  )
}
