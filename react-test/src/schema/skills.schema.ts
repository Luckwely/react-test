import z from "zod";

export const skillsSchema = z.object({
    skills: z.array(
        z.object({
            name: z.string().min(2, "required"),              
        })
    ).min(1),
});

export type skillsSchemType = z.infer<typeof skillsSchema>