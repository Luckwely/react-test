import { useFormContext } from "react-hook-form";
import SubTitle from "./ui/subTitle";
import type { CvFormType } from "../schema/cv.schema";

type Props = {
    number: number
}

export default function Language({number}: Props) {
    const { register, formState: { errors } } = useFormContext<CvFormType>()
    const index = number - 1
    return (
        <div>
            <SubTitle>Item {number}</SubTitle>
            <div>
                <input {...register(`languages.${index}`)} type="text" placeholder="Ex: French" className="input" />
                {errors.languages?.[index] && <p role="alert" className="text-red-500">{errors.languages[index]?.message}</p>}
            </div>
        </div>
    )
}
