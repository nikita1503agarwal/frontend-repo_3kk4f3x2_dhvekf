import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Futuristic Grid Ident',
    desc: 'Abstract 3D cubes arranged in a pulsing grid for a tech brand ident.',
    color: 'from-blue-500/30 to-purple-500/30'
  },
  {
    title: 'Product Launch Film',
    desc: 'Cinematic renders highlighting materials, lighting, and movement.',
    color: 'from-amber-500/30 to-rose-500/30'
  },
  {
    title: 'Explainer Series',
    desc: 'Friendly 2D motion graphics simplifying complex products.',
    color: 'from-cyan-500/30 to-emerald-500/30'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured Work</h2>
          <p className="mt-2 text-slate-300/85">A glimpse into recent motion pieces across branding, product, and storytelling.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
