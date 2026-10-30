import img from "../assets/hero.png"

export default function CvPreview() {

  return (
    <div>
      <main className="page mx-auto my-0 sm:my-8 w-full max-w-[820px] bg-white shadow-xl overflow-hidden pb-10">

        <header className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 px-6 pt-6 sm:px-8 sm:pt-8">
          <label className="relative z-10 shrink-0 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-100 border-4 border-white overflow-hidden sm:-mr-6 cursor-pointer group">
            <img
              src={img}
              alt="Christine Smith"
              className="w-full h-full object-cover"
            />
          </label>
          <div className="flex-1 w-full rounded-3xl bg-orange-300 px-6 py-8 sm:pl-12 sm:pr-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-gray-900">Christine Smith</h1>
            <ul className="mt-3 space-y-1 text-sm text-gray-800">
              <li><a href="tel:+19703333833">+1 (970) 333-3833</a></li>
              <li><a href="mailto:christine.smidth@mail.com">christine.smidth@mail.com</a></li>
            </ul>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          <aside className="md:col-span-1 bg-gray-100 rounded-3xl md:rounded-l-none md:rounded-r-[3rem] px-6 py-8 sm:px-8 md:self-start">
            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 text-justify">
                My name is Christine Smith, an expert Web and Graphic Designer. I have over 7 years of experience within the industry. My specialty is in Adobe Photoshop, Illustrator, Branding and creating attractive Responsive Websites using CSS, HTML, jQuery, Bootstrap and WordPress.
              </p>
            </section>

            <section className="mt-5">
              <h2 className="text-2xl font-extrabold text-gray-900">Languages</h2>
              <ul className="mt-4 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                <li>Adobe Photoshop</li>
                <li>Adobe illustrator</li>
                <li>Adobe PremierPRO</li>
              </ul>
            </section>

            <section className="mt-5">
              <h2 className="text-2xl font-extrabold text-gray-900">Hobbies</h2>
              <ul className="mt-4 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                <li>Adobe Photoshop</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Photoshop</li>
              </ul>
            </section>
          </aside>

          <div className="md:col-span-2 px-6 sm:px-8 md:pl-0 md:pr-8 space-y-9">

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Experience</h2>
              <article className="mt-3">
                <h3 className="text-sm text-gray-900">
                  <span className="font-semibold uppercase">Graphic Web Designer</span>
                  <span className="text-gray-600"> – <time>05/2013</time> to <time>05/2019</time></span>
                </h3>
                <p className="text-sm font-semibold uppercase text-gray-900">Luna, Los Angeles</p>
                <ul className="mt-2 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                  <li>Design &amp; develop online brand creative pieces including landing pages, banners and emails.</li>
                </ul>
              </article>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Education</h2>
              <article className="mt-3 text-sm">
                <h3 className="font-semibold uppercase text-gray-900">California State University, <span className="font-normal text-gray-600">Los Angeles</span></h3>
                <p className="text-gray-700">Bachelor's Degree in Graphic Design</p>
              </article>
              <article className="mt-3 text-sm">
                <h3 className="font-semibold uppercase text-gray-900">United State of America, <span className="font-normal text-gray-600">New york</span></h3>
                <p className="text-gray-700">Bachelor's Degree in Web developemnt</p>
              </article>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900">Skills</h2>
              <ul className="mt-3 list-disc marker:text-gray-900 pl-5 space-y-1.5 text-sm leading-relaxed text-gray-700">
                <li>Ability to turnaround artwork quickly on short notice.</li>
                <li>Exceptional eye for and attention to detail.</li>
                <li>Ability to take direction and work independently.</li>
                <li>Knowledge of email marketing and HTML formatting.</li>
                <li>Working knowledge of HTML5, CSS3, jQuery, PHP, XML.</li>
                <li>Proficiency in Photoshop, Illustrator and InDesign.</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

    </div>
  )
}
