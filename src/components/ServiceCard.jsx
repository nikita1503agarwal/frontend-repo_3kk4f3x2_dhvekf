import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon: Icon, gradient = 'from-blue-500 to-purple-500' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${gradient} pointer-events-none`} style={{ maskImage: 'radial-gradient(250px 250px at var(--x,50%) var(--y,50%), black, transparent)' }} />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
          {Icon && <Icon className="text-white" size={22} />}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-slate-300/80 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
