import z from "zod";

export const educationSchema = z.object({
    school: z.string()
        .nonempty("the school is required")
        .min(2, "At least 2 character"),
    degree: z.string()
        .nonempty("the degree is required")
        .min(2, "At least 2 character")
        .max(255, "Miximum of 255 character"),
    startYear: z.string().nonempty("required"),
    endYear: z.string().nonempty("required")
})

export type educationSchemType = z.infer<typeof educationSchema>