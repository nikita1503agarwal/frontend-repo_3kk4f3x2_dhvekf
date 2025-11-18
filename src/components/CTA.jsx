import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Bring your story to life</h2>
          <p className="mt-3 text-slate-300/85">Tell us about your product, brand, or idea—and we’ll craft a visual narrative that resonates.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input required placeholder="Name" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
            <input required placeholder="Email" type="email" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
            <input required placeholder="Project Type (2D, 3D, Film)" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
            <textarea required placeholder="Brief" className="sm:col-span-3 min-h-[120px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
            <button className="sm:col-span-3 mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg shadow-lg shadow-purple-500/20">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
