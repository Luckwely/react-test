import z from "zod";

export const hobbiesSchema = z.object({
    hobbies: z.array(
        z.object({
            name: z.string().min(2, "required"),              
        })
    ).min(1),
});

export type hobbiesSchemType = z.infer<typeof hobbiesSchema>