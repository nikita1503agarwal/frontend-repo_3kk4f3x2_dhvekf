import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-slate-900/40 text-slate-100/90">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            Cutting‑edge 2D & 3D animation studio
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Stories that move. Visuals that transcend.
          </h1>
          <p className="mt-4 text-lg text-slate-200/85">
            We craft cinematic 2D/3D animations, motion graphics, and immersive product films for brands that want to stand out.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg shadow-lg shadow-purple-500/20">
              Explore Services <ArrowRight size={18} />
            </Link>
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-white/90 hover:bg-white/5 transition-colors">
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
