import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-100 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main
        id="conteudo-principal"
        className="mx-auto w-full max-w-5xl flex-1 px-4 py-8"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
