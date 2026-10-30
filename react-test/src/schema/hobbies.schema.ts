import z from "zod";

export const hobbiesSchema = z.object({
    hobbies: z.string()
                .nonempty("the fullname is required")
                .min(2, "At least 2 character"),              
})

export type hobbiesSchemType = z.infer<typeof hobbiesSchema>