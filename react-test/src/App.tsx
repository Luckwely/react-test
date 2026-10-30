import CvPreview from "./components/cvPreview";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import Header from "./components/header";
import PersonalInfoForm from "./components/personalInfoForm";
import SkillsForm from "./components/skillsForm";
import ButtonAddMore from "./components/ui/buttonAddMore";
import { FaPlus, FaTrash } from "react-icons/fa";
import Language from "./components/language";
import Hobbies from "./components/hobbies";
import { useState } from "react";
import ButtonRemove from "./components/ui/buttonRemove";
import Title from "./components/ui/title";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cvSchema, type CvFormType } from "./schema/cv.schema";

export default function App() {

  const [experiences, setExperiences] = useState<string[]>([]);
  const [educations, setEducations] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);

  const methods = useForm<CvFormType>({
    resolver: zodResolver(cvSchema),
    mode: "onChange",
    defaultValues: {
      photo: undefined,
      fullname: '',
      title: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
      school: '',
      degree: '',
      startYear: '',
      endYear: '',
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
      hobbies: '',
      languages: '',
      skills: ''
    }
  });

  const submit: SubmitHandler<CvFormType> = (data) => {
    console.log("cv validated successfully",data);
    alert("cv validated");
  }
  const onInvalid = (errors: object) => {
    console.log("validation errors", errors);
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="flex mt-12">
        <section className="flex-1 border border-gray-100 p-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit, onInvalid)}>
              <div className="mb-5">
                <PersonalInfoForm />
              </div>
              <div className="mb-5">
                <Title>Experience</Title>
                <ExperienceForm number={1} />
                {experiences.map((id, index) => (
                  <div key={id}>
                    <ExperienceForm number={index + 2} />
                    <ButtonRemove onClick={() => setExperiences(old => old.filter(item => item !== id))}>
                      <FaTrash /> Remove
                    </ButtonRemove>
                  </div>
                ))}
                <ButtonAddMore onClick={() => setExperiences(old => [...old, crypto.randomUUID()])}>
                  <FaPlus /> Add More Experience
                </ButtonAddMore>
              </div>

              <div className="mb-5">
                <Title>Education</Title>
                <EducationForm number={1} />
                {educations.map((id, index) => (
                  <div key={id}>
                    <EducationForm number={index + 2} />
                    <ButtonRemove onClick={() => setEducations(old => old.filter(item => item !== id))}>
                      <FaTrash /> Remove
                    </ButtonRemove>
                  </div>
                ))}
                <ButtonAddMore onClick={() => setEducations(old => [...old, crypto.randomUUID()])}>
                  <FaPlus /> Add More Education
                </ButtonAddMore>
              </div>

              <div className="mb-5">
                <Title>Skill</Title>
                <SkillsForm number={1} />
                {skills.map((id, index) => (
                  <div key={id}>
                    <SkillsForm number={index + 2} />
                    <ButtonRemove onClick={() => setSkills(old => old.filter(item => item !== id))}>
                      <FaTrash /> Remove
                    </ButtonRemove>
                  </div>
                ))}
                <ButtonAddMore onClick={() => setSkills(old => [...old, crypto.randomUUID()])}>
                  <FaPlus /> Add More Skill
                </ButtonAddMore>
              </div>

              <div className="mb-5">
                <Title>Language</Title>
                <Language number={1} />
                {languages.map((id, index) => (
                  <div key={id}>
                    <Language number={index + 2} />
                    <ButtonRemove onClick={() => setLanguages(old => old.filter(item => item !== id))} >
                      <FaTrash /> Remove
                    </ButtonRemove>
                  </div>
                ))}
                <ButtonAddMore onClick={() => setLanguages(old => [...old, crypto.randomUUID()])}>
                  <FaPlus /> Add More Language
                </ButtonAddMore>
              </div>

              <div className="mb-5">
                <Title>Hobbies</Title>
                <Hobbies number={1} />
                {hobbies.map((id, index) => (
                  <div key={id}>
                    <Hobbies number={index + 2} />
                    <ButtonRemove onClick={() => setHobbies(old => old.filter(item => item !== id))}>
                      <FaTrash /> Remove
                    </ButtonRemove>
                  </div>
                ))}
                <ButtonAddMore onClick={() => setHobbies(old => [...old, crypto.randomUUID()])}>
                  <FaPlus /> Add More Hobbie
                </ButtonAddMore>
              </div>
              <button type="submit">ok</button>
            </form>
          </FormProvider>
        </section>

        <section className="flex-1 border border-gray-100">
          <CvPreview />
        </section>
      </main>
    </div>
  )
}
