import Title from "./ui/title"

export default function PersonalInfoForm() {
  return (
    <div>
      <Title>Peronal Information</Title>
      <div>
        <label>Your fullname*</label>
        <input type="text" placeholder="Ex: John Doe..." className="input" />
      </div>
      <div>
        <label>Title of your job*</label>
        <input type="text" placeholder="Ex: Developer..." className="input" />
      </div>
      <div>
        <label>Your email*</label>
        <input type="email" placeholder="Ex: yourEmail@gmail.com" className="input" />
      </div>
      <div>
        <label>Your phone*</label>
        <input type="text" placeholder="Ex: +261 34 XX XXX XX" className="input" />
      </div>
      <div>
        <label>Your address*</label>
        <input type="text" placeholder="Ex: Lot ED 12" className="input" />
      </div>
      <div>
        <label>Your summary*</label>
        <textarea name="" id="" className="input"></textarea>
      </div>
    </div>
  )
}
