import { FaSave } from "react-icons/fa";
import ExportButton from "./exportButton";

export default function Header() {
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-100">
        <div className="bg-black/90 backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/50 px-2 py-1 flex items-center justify-between transition-all duration-300 hover:border-white/20">

          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl rotate-6"></div>
              <div className="relative bg-black rounded-lg w-8 h-8 flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2-5V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2v-3" />
                  <circle cx="17" cy="17" r="2.5" stroke="currentColor" fill="none" stroke-width="1.8" />
                  <path stroke-linecap="round" d="M19 19l1.5 1.5" stroke-width="1.8" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-lg tracking-tight flex items-center gap-1">
                CV<span className="text-white/70 font-light">.</span>GENERATOR
              </span>
              <span className="text-[0.45rem] uppercase tracking-[0.3em] text-white/40 font-medium">online builder</span>
            </div>
          </div>

          <div className="">
            <ExportButton><FaSave /> Export</ExportButton>
          </div>
        </div>
      </nav>

    </>
  )
}
