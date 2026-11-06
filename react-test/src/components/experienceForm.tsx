import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { experienceSchemType } from "../schema/experience.schema"

type Props = {
  number: number
}

export default function ExperienceForm({number}:Props) {
  const index = number - 1;

  const { register, formState: { errors } } = useFormContext<experienceSchemType>();

  return (
    <div>
      <SubTitle>Item ({number})</SubTitle>
      <div>
        <label>Your company*</label>
        <input {...register(`experiences.${index}.company`)} type="text" placeholder="Ex: Connecta" className="input" />
        {errors.experiences?.[index]?.company && <p role="alert" className="text-red-500">{errors.experiences[index]?.company?.message}</p>}
      </div>
      <div>
        <label>Your role*</label>
        <input {...register(`experiences.${index}.role`)} type="text" placeholder="Ex: Responsable" className="input" />
        {errors.experiences?.[index]?.role && <p role="alert" className="text-red-500">{errors.experiences[index]?.role?.message}</p>}
      </div>
      <div>
        <label>Start Date*</label>
        <input {...register(`experiences.${index}.startDate`)} type="date" className="input" />
        {errors.experiences?.[index]?.startDate && <p role="alert" className="text-red-500">{errors.experiences[index]?.startDate?.message}</p>}
      </div>
      <div>
        <label>End Date*</label>
        <input {...register(`experiences.${index}.endDate`)} type="date" className="input" />
        {errors.experiences?.[index]?.endDate && <p role="alert" className="text-red-500">{errors.experiences[index]?.endDate?.message}</p>}
      </div>
      <div>
        <label>Description*</label>
        <textarea {...register(`experiences.${index}.description`)} className="input" />
        {errors.experiences?.[index]?.description && <p role="alert" className="text-red-500">{errors.experiences[index]?.description?.message}</p>}
      </div>
    </div>
  )
}
