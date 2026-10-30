import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { educationSchemType } from "../schema/education.schema"

type Props = {
  number: number
}

export default function EducationForm({number}: Props) {
  const { register, formState: { errors } } = useFormContext<educationSchemType>()
  return (
    <div>
      <SubTitle>Item ({number})</SubTitle>
      <div>
        <label>Your school*</label>
        <input {...register("school")}type="text" placeholder="Ex: University of Harvard" className="input" />
        {errors.school && <p role="alert" className="text-red-500">{errors.school.message}</p>}
      </div>
      <div>
        <label>Your degree*</label>
        <input {...register("degree")} type="text" placeholder="Ex: Bachelor" className="input" />
        {errors.degree && <p role="alert" className="text-red-500">{errors.degree.message}</p>}
      </div>
      <div>
        <label>Start year*</label>
        <input {...register("startYear")} type="date" className="input" />
        {errors.startYear && <p role="alert" className="text-red-500">{errors.startYear.message}</p>}
      </div>
      <div>
        <label>End year*</label>
        <input {...register("endYear")} type="date" className="input" />
        {errors.endYear && <p role="alert" className="text-red-500">{errors.endYear.message}</p>}
      </div>
    </div>
  )
}
