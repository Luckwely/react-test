import CvPreview from "./components/cvPreview";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import ExportButton from "./components/exportButton";
import Header from "./components/header";
import PersonalInfoForm from "./components/personalInfoForm";
import SkillsForm from "./components/skillsForm";
import { IoMdDoneAll } from "react-icons/io";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="flex">
        <section className="flex-1 border border-gray-100 p-4">
          <PersonalInfoForm />
          <ExperienceForm />
          <EducationForm />
          <SkillsForm />
          <ExportButton><IoMdDoneAll /> Done</ExportButton>
        </section>
        <section className="flex-1 border border-gray-100 p-4">
          <CvPreview />
        </section>
      </main>
    </div>
  )
}
