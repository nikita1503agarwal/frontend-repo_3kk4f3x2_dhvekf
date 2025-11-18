import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Film, Shapes, PenTool, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close menu on route change
    setOpen(false)
  }, [location.pathname])

  const navLink = (to, label, Icon) => (
    <Link to={to} className="inline-flex items-center gap-2 text-sm text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors">
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </Link>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-gradient-to-tr from-purple-500 to-blue-500 opacity-70 rounded-md"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-md p-1.5">
                <Sparkles className="text-white" size={18} />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white">MotionGrid Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLink('/', 'Home')}
            {navLink('/services', 'Services', Shapes)}
            <a href="#work" className="inline-flex items-center gap-2 text-sm text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors"><Film size={16}/> Work</a>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors"><Phone size={16}/> Contact</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md border border-white/10 text-white/90">
              {open ? <X size={20}/> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            <div className="grid gap-1">
              {navLink('/', 'Home')}
              {navLink('/services', 'Services', Shapes)}
              <a href="#work" className="inline-flex items-center gap-2 text-sm text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors"><Film size={16}/> Work</a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors"><PenTool size={16}/> Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
