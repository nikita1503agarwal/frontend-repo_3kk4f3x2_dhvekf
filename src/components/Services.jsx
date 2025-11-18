import { Cube, PenTool, Film, Layers } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

export default function Services() {
  const items = [
    {
      title: '3D Animation',
      description: 'Product renders, character animation, and cinematic scenes built with physically based lighting and meticulous detail.',
      icon: Cube,
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: '2D Animation',
      description: 'Storyboard to final frame: explainer videos, cel animation, and animated branding with strong visual identity.',
      icon: PenTool,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Motion Graphics',
      description: 'Logo animations, title sequences, UI motion design, and broadcast-ready graphic packages.',
      icon: Layers,
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Story Development',
      description: 'Narrative strategy, scriptwriting, and storyboarding that transform ideas into emotionally resonant films.',
      icon: Film,
      gradient: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <section className="relative py-20" id="services">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_100%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold text-white">
            Our Services
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-2 text-slate-300/85">
            From concept to final delivery, we combine art direction with technical mastery to produce animations that convert.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <ServiceCard key={it.title} title={it.title} description={it.description} icon={it.icon} gradient={it.gradient} />
          ))}
        </div>

        <div className="mt-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg">Need a custom pipeline?</h3>
                <p className="text-slate-300/80 text-sm">We design bespoke animation pipelines for product launches and long‑form series.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">Start a project</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
