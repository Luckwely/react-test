import z from "zod";

export const languagesSchema = z.object({
    languages: z.string()
                .nonempty("the fullname is required")
                .min(2, "At least 2 character"),              
})

export type languagesSchemType = z.infer<typeof languagesSchema>