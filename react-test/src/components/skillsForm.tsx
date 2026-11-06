import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { CvFormType } from "../schema/cv.schema"

type Props = {
  number: number
}

export default function SkillsForm({ number }: Props) {
  const index = number - 1;

  const {
    register,
    formState: { errors },
  } = useFormContext<CvFormType>();

  return (
    <div>
      <SubTitle>Item {number}</SubTitle>
      <div>

        <input
          {...register(`skills.${index}.name`)}
          type="text"
          className="input"
        />

        {errors.skills?.[index]?.name && (
          <p className="text-red-500">
            {errors.skills[index]?.name?.message}
          </p>
        )}

      </div>
    </div>
  )
}
