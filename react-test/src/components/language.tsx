import { useFormContext } from "react-hook-form";
import SubTitle from "./ui/subTitle";
import type { languagesSchemType } from "../schema/languages.schema";

type Props = {
    number: number
}

export default function Language({number}: Props) {
    const { register, formState: { errors } } = useFormContext<languagesSchemType>()
    return (
        <div>
            <SubTitle>Item {number}</SubTitle>
            <div>
                <input {...register("languages")} type="text" placeholder="Ex: French" className="input" />
                {errors.languages && <p role="alert" className="text-red-500">{errors.languages.message}</p>}
            </div>
        </div>
    )
}
