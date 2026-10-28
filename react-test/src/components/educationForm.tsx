import Title from "./ui/title"

export default function EducationForm() {
  return (
    <div>
      <Title>Education</Title>
      <div>
        <label>Your school*</label>
        <input type="text" placeholder="Ex: University of Harvard" className="input" />
      </div>
      <div>
        <label>Your degree*</label>
        <input type="text" placeholder="Ex: Bachelor" className="input" />
      </div>
      <div>
        <label>Start year*</label>
        <input type="date" className="input" />
      </div>
      <div>
        <label>End year*</label>
        <input type="date" className="input" />
      </div>
    </div>
  )
}
