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
import { useState, useEffect } from "react";
import ButtonRemove from "./components/ui/buttonRemove";
import Title from "./components/ui/title";
import { useForm, FormProvider, useWatch, useFieldArray, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cvSchema, type CvFormType } from "./schema/cv.schema";

  const STORAGE_KEY= "easycv-draft";
  function loadDraft(): Partial<CvFormType> {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return {};

      const draft = JSON.parse(saved);
      if (draft.languages && !Array.isArray(draft.languages)) {
        draft.languages = draft.languages.trim() ? [draft.languages] : [''];
      }
      if (draft.educations && !Array.isArray(draft.educations)) {
        draft.educations = [draft.educations];
      }
      return draft;
    } catch {
      return {};
    }
  }
  function loadIds(section: string): string[] {
    try {
      const saved = localStorage.getItem(
        `easycv-${section}`
      );
      const ids = saved ? JSON.parse(saved): [];
      return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
    } catch {
      return [];
    }
  }

export default function App() {

  const [experiences, setExperiences] = useState<string[]>(() => loadIds("experiences"));
  const [skills, setSkills] = useState<string[]>(() => loadIds("skills"));
  const [languages, setLanguages] = useState<string[]>(() => loadIds("languages"));
  const [hobbies, setHobbies] = useState<string[]>(() => loadIds("hobbies"));

  const methods = useForm<CvFormType>({
    resolver: zodResolver(cvSchema),
    mode: "onChange",

    defaultValues: {
      fullname: '',
      title: '',
      email: '',
      phone: '',
      address: '',
      summary: '',

      educations: [{ school: '', degree: '', startYear: '', endYear: '' }],

      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',

      hobbies: '',
      languages: [''],
      skills: '',

      ...loadDraft(),
      photo: undefined,
    }

  });
  const educationFields = useFieldArray<CvFormType, "educations">({ control: methods.control, name: "educations" });
  const cvValues = useWatch({
    control: methods.control,
  });
const {subscribe} = methods;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const unsubscribe = subscribe({
      formState: {
        values: true,
      },

      callback: ({ values }) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          try {
            const draft = {
              ...values,
              photo: undefined,
            };

            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(draft)
            );

            console.log("CV draft saved successfully");
          } catch (error) {
            console.error("Saving failed:", error);
          }
        }, 500);
      },
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [subscribe]);


useEffect(() => {
  try {
    localStorage.setItem(
      "easycv-experiences",
      JSON.stringify(experiences)
    );


    localStorage.setItem(
      "easycv-skills",
      JSON.stringify(skills)
    );


    localStorage.setItem(
      "easycv-languages",
      JSON.stringify(languages)
    );
    localStorage.setItem(
      "easycv-hobbies",
      JSON.stringify(hobbies)
    );
  } catch (error) {
    console.error("Saving sections failed:", error);
  }
}, [
  experiences,
  skills,
  languages,
  hobbies,
]);

  const submit: SubmitHandler<CvFormType> = (data) => {
    console.log("cv validated successfully",data);
    alert("cv validated");
  }
  const onInvalid = (errors: object) => {
    console.log("validation errors", errors);
  }
  return (
    <div>
      <div className="no-print">
        <Header />
      </div>
      <main className="flex mt-12">
        <section className="no-print flex-1 border border-gray-100 p-4">
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
                {educationFields.fields.map((field, index) => (
                  <div key={field.id}>
                    <EducationForm number={index + 1} />
                    {index > 0 && (
                      <ButtonRemove onClick={() => educationFields.remove(index)}>
                        <FaTrash /> Remove
                      </ButtonRemove>
                    )}
                  </div>
                ))}
                <ButtonAddMore onClick={() => {
                  educationFields.append({ school: '', degree: '', startYear: '', endYear: '' });
                }}>
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
                {languages.map((id, index) => (
                  <div key={id}>
                    <Language number={index + 1} />
                    {index > 0 && (
                      <ButtonRemove onClick={() => {
                        setLanguages(old => old.filter(item => item !== id));
                        methods.setValue("languages", methods.getValues("languages")?.filter((_, itemIndex) => itemIndex !== index));
                      }}>
                        <FaTrash /> Remove
                      </ButtonRemove>
                    )}
                  </div>
                ))}
                <ButtonAddMore onClick={() => {
                  setLanguages(old => [...old, crypto.randomUUID()]);
                  methods.setValue("languages", [...(methods.getValues("languages") ?? []), '']);
                }}>
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
              <button type="button" onClick={()=> {
                console.log('current cv values:',methods.getValues());
              }}>Check form values</button>
              <button type="submit">ok</button>
            </form>
          </FormProvider>
        </section>

        <section className="flex-1 border border-gray-100">
          <CvPreview cv={cvValues} />
        </section>
      </main>
    </div>
  )
}
