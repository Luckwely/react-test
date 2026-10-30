import { useFormContext } from "react-hook-form"
import Title from "./ui/title"
import type { personalInfoSchemType } from "../schema/personalInfo.schema"

export default function PersonalInfoForm() {
  const { register, formState: { errors } } = useFormContext<personalInfoSchemType>()
  return (
    <div>
      <Title>Peronal Information</Title>
      <div>
        <label>Your photo*</label>
        <input
          {...register("photo")}
          type="file"
          className="input" />
        {errors.photo && <p role="alert" className="text-red-500">{errors.photo.message}</p>}
      </div>
      <div>
        <label>Your fullname*</label>
        <input
          {...register("fullname")}
          type="text"
          placeholder="Ex: John Doe..."
          className="input" />
        {errors.fullname && <p role="alert" className="text-red-500">{errors.fullname.message}</p>}
      </div>
      <div>
        <label>Title of your job*</label>
        <input
          {...register("title")}
          type="text"
          placeholder="Ex: Developer..."
          className="input" />
        {errors.title && <p role="alert" className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <label>Your email*</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Ex: yourEmail@gmail.com"
          className="input" />
        {errors.email && <p role="alert" className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label>Your phone*</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Ex: +261 34 XX XXX XX"
          className="input" />
        {errors.phone && <p role="alert" className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div>
        <label>Your address*</label>
        <input
          {...register("address")}
          type="text"
          placeholder="Ex: Lot ED 12"
          className="input" />
        {errors.address && <p role="alert" className="text-red-500">{errors.address.message}</p>}
      </div>
      <div>
        <label>Your summary*</label>
        <textarea
          {...register("summary")}
          className="input" />
        {errors.summary && <p role="alert" className="text-red-500">{errors.summary.message}</p>}
      </div>
    </div>
  )
}
