import { useFormContext } from "react-hook-form"
import SubTitle from "./ui/subTitle"
import type { hobbiesSchemType } from "../schema/hobbies.schema"

type Props = {
    number: number
}

export default function Hobbies({number}: Props) {
    const { register, formState: { errors } } = useFormContext<hobbiesSchemType>()
    return (
        <div>
            <SubTitle>Item {number}</SubTitle>
            <div>
                <input {...register("hobbies")} type="text" placeholder="Ex: Playing guitar" className="input" />
                {errors.hobbies && <p role="alert" className="text-red-500">{errors.hobbies.message}</p>}
            </div>
        </div>
    )
}
