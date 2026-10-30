import z from "zod";

export const skillsSchema = z.object({
    skills: z.string()
                .nonempty("the fullname is required")
                .min(2, "At least 2 character"),              
})

export type skillsSchemType = z.infer<typeof skillsSchema>