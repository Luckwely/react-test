import z from "zod"
import { personalInfoSchema } from "./personalInfo.schema"
import { educationSchema } from "./education.schema"
import { experienceSchema } from "./experience.schema"
import { hobbiesSchema } from "./hobbies.schema"
import { languagesSchema } from "./languages.schema"
import { skillsSchema } from "./skills.schema"

export const cvSchema = personalInfoSchema
    .and(educationSchema)
    .and(experienceSchema)
    .and(hobbiesSchema)
    .and(languagesSchema)
    .and(skillsSchema)

export type CvFormType = z.infer<typeof cvSchema>
