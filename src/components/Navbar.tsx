import { NavLink } from 'react-router-dom'
import { mockData } from '../mock/mockData'

const linkBase =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-slate-900'

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-base font-semibold text-slate-900">
          {mockData.institution.name}
        </NavLink>

        <nav className="flex flex-wrap items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/projeto"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
            }
          >
            Projeto
          </NavLink>
          <NavLink
            to="/servico"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
            }
          >
            Serviço
          </NavLink>
          <NavLink
            to="/colaboradores"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-slate-200 text-slate-900' : ''}`
            }
          >
            Colaboradores
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
