import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { CvFormType } from "../schema/cv.schema"

type Props = {
  number: number
}

export default function EducationForm({number}: Props) {
  const { register, formState: { errors } } = useFormContext<CvFormType>()
  const index = number - 1
  return (
    <div>
      <SubTitle>Item ({number})</SubTitle>
      <div>
        <label>Your school*</label>
        <input {...register(`educations.${index}.school`)} type="text" placeholder="Ex: University of Harvard" className="input" />
        {errors.educations?.[index]?.school && <p role="alert" className="text-red-500">{errors.educations[index]?.school?.message}</p>}
      </div>
      <div>
        <label>Your degree*</label>
        <input {...register(`educations.${index}.degree`)} type="text" placeholder="Ex: Bachelor" className="input" />
        {errors.educations?.[index]?.degree && <p role="alert" className="text-red-500">{errors.educations[index]?.degree?.message}</p>}
      </div>
      <div>
        <label>Start year*</label>
        <input {...register(`educations.${index}.startYear`)} type="date" className="input" />
        {errors.educations?.[index]?.startYear && <p role="alert" className="text-red-500">{errors.educations[index]?.startYear?.message}</p>}
      </div>
      <div>
        <label>End year*</label>
        <input {...register(`educations.${index}.endYear`)} type="date" className="input" />
        {errors.educations?.[index]?.endYear && <p role="alert" className="text-red-500">{errors.educations[index]?.endYear?.message}</p>}
      </div>
    </div>
  )
}
