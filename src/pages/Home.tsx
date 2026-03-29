import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Home() {
  return (
    <Page title="Home">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-medium text-slate-400">Apresentação</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          {mockData.institution.name}
        </h2>
        <p className="mt-2 text-slate-300">{mockData.institution.cityState}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-950/40 p-4">
            <p className="text-sm font-medium text-white">
              {mockData.institution.classProject}
            </p>
            <p className="mt-1 text-sm text-slate-300">{mockData.institution.course}</p>
          </div>
          <div className="rounded-xl bg-slate-950/40 p-4">
            <p className="text-sm font-medium text-white">Feira</p>
            <p className="mt-1 text-sm text-slate-300">{mockData.institution.fairNote}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Sobre</h3>
          <p className="mt-2 text-sm text-slate-300">
            Nome do projeto, resumo e tecnologias utilizadas.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Projeto</h3>
          <p className="mt-2 text-sm text-slate-300">
            Instituição fictícia, setores/andares, inventário e cabeamento estruturado.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Serviço</h3>
          <p className="mt-2 text-sm text-slate-300">
            Exemplo de monitoramento de rede com {mockData.service.softwareName}.
          </p>
        </div>
      </section>
    </Page>
  )
}
