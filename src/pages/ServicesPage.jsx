import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Cube, PenTool, Layers, Film, PlayCircle, Sparkles } from 'lucide-react'

const services = [
  {
    title: '3D Animation',
    icon: Cube,
    bullets: [
      'Product visualization & hero shots',
      'Character animation & rigging',
      'Cinematic lighting & look‑dev'
    ],
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: '2D Animation',
    icon: PenTool,
    bullets: [
      'Explainers & info‑graphics',
      'Cel animation & hybrid workflows',
      'Brand illustration systems'
    ],
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Motion Graphics',
    icon: Layers,
    bullets: [
      'Logo reveals & title sequences',
      'UI motion & product UI demos',
      'Broadcast & social packages'
    ],
    gradient: 'from-cyan-500 to-emerald-500'
  },
  {
    title: 'Story Development',
    icon: Film,
    bullets: [
      'Narrative & scriptwriting',
      'Storyboarding & animatics',
      'Voiceover & sound design direction'
    ],
    gradient: 'from-amber-500 to-orange-500'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />

      <section className="pt-28 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-semibold text-white">
            Services
          </motion.h1>
          <p className="mt-3 text-slate-300/85 max-w-2xl">
            A flexible suite spanning 2D, 3D, and storytelling. Designed to plug into your launch timeline and deliver with impact.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-20`} />
              <div className="relative p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
                  <s.icon className="text-white" size={22} />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-slate-200/85">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/70" /> {b}</li>
                  ))}
                </ul>
                <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  Get a quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <PlayCircle className="text-white/80" size={64} />
            </div>
            <div className="p-6">
              <h3 className="text-white text-2xl font-semibold">Our process in 60 seconds</h3>
              <p className="text-slate-300/85 mt-2">A quick walkthrough of how we take a brief from concept to final delivery—bridging art direction, design, and animation.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">© {new Date().getFullYear()} MotionGrid Studio. All rights reserved.</div>
      </footer>
    </div>
  )
}
