import { NavLink } from 'react-router-dom'
import { mockData } from '../mock/mockData'

const linkBase =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60'

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="group">
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-white group-hover:text-white">
              {mockData.institution.name}
            </span>
            <span className="mt-0.5 text-xs font-medium text-slate-400 group-hover:text-slate-300">
              Governo do estado no Amazonas
            </span>
          </div>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/projeto"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Projeto
          </NavLink>
          <NavLink
            to="/servico"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Serviço
          </NavLink>
          <NavLink
            to="/feira"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Feira
          </NavLink>
          <NavLink
            to="/colaboradores"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-800/80 text-white' : ''}`
            }
          >
            Colaboradores
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
