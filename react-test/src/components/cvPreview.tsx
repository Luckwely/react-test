import { useEffect, useState } from "react"
import img from "../assets/hero.png"

type PreviewCv = {
  photo?: FileList
  fullname?: string
  phone?: string
  email?: string
  summary?: string
  languages?: Array<string | undefined> | string
  hobbies?: string
  role?: string
  startDate?: string
  endDate?: string
  company?: string
  description?: string
  educations?: Array<{ school?: string; degree?: string; startYear?: string; endYear?: string }>
  skills?: string
}

export default function CvPreview({ cv }: { cv: PreviewCv }) {
  const [photoUrl, setPhotoUrl] = useState(img)

  useEffect(() => {
    const file = cv.photo?.[0]
    if (!file) {
      setPhotoUrl(img)
      return
    }

    const url = URL.createObjectURL(file)
    setPhotoUrl(url)

    return () => URL.revokeObjectURL(url)
  }, [cv.photo])

  return (
    <div>
      <main className="page mx-auto my-0 sm:my-8 w-full max-w-[820px] bg-white shadow-xl overflow-hidden pb-10">

        <header className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 px-6 pt-6 sm:px-8 sm:pt-8">
          <label className="relative z-10 shrink-0 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-100 border-4 border-white overflow-hidden sm:-mr-6 cursor-pointer group">
            <img
              src={photoUrl}
              alt={cv.fullname || "Uploaded profile photo"}
              className="w-full h-full object-cover"
            />
          </label>
          <div className="flex-1 w-full rounded-3xl bg-orange-300 px-6 py-8 sm:pl-12 sm:pr-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-gray-900">{cv.fullname}</h1>
            <ul className="mt-3 space-y-1 text-sm text-gray-800">
              <li><a href="">{cv.phone}</a></li>
              <li><a href="">{cv.email}</a></li>
            </ul>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          <aside className="md:col-span-1 bg-gray-100 rounded-3xl md:rounded-l-none md:rounded-r-[3rem] px-6 py-8 sm:px-8 md:self-start">
            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 text-justify">
                {cv.summary}
              </p>
            </section>

            <section className="mt-5">
              <h2 className="text-2xl font-extrabold text-gray-900">Languages</h2>
              <ul className="mt-4 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                {Array.isArray(cv.languages) && cv.languages.filter(Boolean).map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </section>

            <section className="mt-5">
              <h2 className="text-2xl font-extrabold text-gray-900">Hobbies</h2>
              <ul className="mt-4 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                <li>{cv.hobbies}</li>
              </ul>
            </section>
          </aside>

          <div className="md:col-span-2 px-6 sm:px-8 md:pl-0 md:pr-8 space-y-9">

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Experience</h2>
              <article className="mt-3">
                <h3 className="text-sm text-gray-900">
                  <span className="font-semibold uppercase">{cv.role}</span>
                  <span className="text-gray-600"> – <time>{cv.startDate}</time> to <time>{cv.endDate}</time></span>
                </h3>
                <p className="text-sm font-semibold uppercase text-gray-900">{cv.company}</p>
                <ul className="mt-2 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                  <li>{cv.description}</li>
                </ul>
              </article>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Education</h2>
              {Array.isArray(cv.educations) && cv.educations.filter((education) => education?.school || education?.degree).map((education, index) => (
                <article key={index} className="mt-3 text-sm">
                  <h3 className="font-semibold uppercase text-gray-900">{education.school}</h3>
                  <p className="text-gray-700">{education.degree}</p>
                  <span className="text-gray-600"> – <time>{education.startYear}</time> to <time>{education.endYear}</time></span>
                </article>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Skills</h2>
              <ul className="mt-3 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                <li>{cv.skills}</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

    </div>
  )
}
