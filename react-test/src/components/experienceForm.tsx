import Title from "./ui/title"

export default function ExperienceForm() {
  return (
    <div>
      <Title>Experience</Title>
      <div>
        <label>Your company*</label>
        <input type="text" placeholder="Ex: Connecta" className="input" />
      </div>
      <div>
        <label>Your role*</label>
        <input type="text" placeholder="Ex: Responsable" className="input" />
      </div>
      <div>
        <label>Start Date*</label>
        <input type="date" className="input" />
      </div>
      <div>
        <label>End Date*</label>
        <input type="date" className="input" />
      </div>
      <div>
        <label>Description*</label>
        <textarea name="" id="" className="input"></textarea>
      </div>
    </div>
  )
}
