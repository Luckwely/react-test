import Title from "./ui/title"

export default function SkillsForm() {
  return (
    <div>
      <Title>Your skills</Title>
      <div>
        <label>Your hobbies*</label>
        <input type="text" placeholder="Ex: playing guitar" className="input" />
      </div>
      <div>
        <label>Your mother tongue*</label>
        <input type="text" placeholder="Ex: French" className="input" />
      </div>
      <div>
        <label>Your second language*</label>
        <input type="text" placeholder="Ex: English" className="input" />
      </div>
      <div>
        <label>Your third language*</label>
        <input type="text" placeholder="Ex: Italian" className="input" />
      </div>
    </div>
  )
}
