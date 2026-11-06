import z from "zod";

export const languagesSchema = z.object({
    languages: z.array(
        z.object({
            name:z.string().min(2, "At least one language is required"),
        })
    ).min(1),
});

export type languagesSchemType = z.infer<typeof languagesSchema>