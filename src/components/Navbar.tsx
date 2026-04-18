import { mockData } from '../mock/mockData'

const linkBase =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60'

const sections = [
  { href: '#inicio', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projeto', label: 'Projeto' },
  { href: '#servico', label: 'Serviço' },
  { href: '#feira', label: 'Feira' },
  { href: '#colaboradores', label: 'Colaboradores' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="group">
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-white group-hover:text-white">
              {mockData.institution.name}
            </span>
            <span className="mt-0.5 text-xs font-medium text-slate-400 group-hover:text-slate-300">
              Governo do estado no Amazonas
            </span>
          </div>
        </a>

        <nav className="flex flex-wrap items-center gap-1">
          {sections.map((section) => (
            <a key={section.href} href={section.href} className={linkBase}>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
