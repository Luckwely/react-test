import z from "zod";

export const languagesSchema = z.object({
    languages: z.array(
        z.string()
            .trim()
            .nonempty("the language is required")
            .min(2, "At least 2 character")
    ).min(1, "At least one language is required")
})

export type languagesSchemType = z.infer<typeof languagesSchema>