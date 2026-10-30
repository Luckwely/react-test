import z from "zod";

export const experienceSchema = z.object({
        company: z.string()
                .nonempty("the fullname is required")
                .min(2, "At least 2 character"),
        role: z.string()
                .nonempty("the role is required")
                .min(2, "At least 2 character")
                .max(255, "Miximum of 255 character"),
        startDate: z.string().nonempty("required"),
        endDate: z.string().nonempty("required"),
        description: z.string()
                .trim()
                .min(1,"The description is required")
                .min(2, "At least 2 character")
})

export type experienceSchemType = z.infer<typeof experienceSchema>