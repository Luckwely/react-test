import z from "zod";

export const personalInfoSchema = z.object({
    photo: z.instanceof(FileList, {error: "Photo is required"},)
                .refine((file)=>file.length === 1, "Please select one photo")
            .refine(
                (file)=> file.length === 0 || file[0].size <= 2 * 1024 * 1024, "Photo must not exceed 2MB")
            .refine((file)=> file.length === 0 || ["image/jpeg", "image/png", "image/webp"].includes(file[0].type), "Only jpeg, png, webp are allowed"),
    fullname: z.string()
                .nonempty("the fullname is required")
                .min(2, "At least 2 character")
                .max(255, "Miximum of 255 character"),
    title: z.string()
            .nonempty("the title is required")
            .min(2, "At least 2 character")
            .max(255, "Miximum of 255 character"),
    email: z.email("Put a valid email addres")
        .nonempty("the email is required")
        .min(2, "At least 2 character")
        .max(255, "Miximum of 255 character"),
    phone: z.string()
            .nonempty("The phone is required")
            .min(2, "At least 2 character")
            .max(255, "Miximum of 255 character"),
    address: z.string()
            .nonempty("The phone is required")
            .min(2, "At least 2 character")
            .max(255, "Miximum of 255 character"),
    summary: z.string()
        .nonempty("The summary is required")
        .min(2, "At least 2 character")               
})

export type personalInfoSchemType = z.infer<typeof personalInfoSchema>