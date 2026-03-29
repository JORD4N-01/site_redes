import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Home() {
  return (
    <Page title="Home">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-medium text-slate-600">Apresentação</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          {mockData.institution.name}
        </h2>
        <p className="mt-2 text-slate-700">{mockData.institution.cityState}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">
              {mockData.institution.classProject}
            </p>
            <p className="mt-1 text-sm text-slate-700">{mockData.institution.course}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">Feira</p>
            <p className="mt-1 text-sm text-slate-700">{mockData.institution.fairNote}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">Sobre</h3>
          <p className="mt-2 text-sm text-slate-700">
            Nome do projeto, resumo e tecnologias utilizadas.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">Projeto</h3>
          <p className="mt-2 text-sm text-slate-700">
            Instituição fictícia, setores/andares, inventário e cabeamento estruturado.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">Serviço</h3>
          <p className="mt-2 text-sm text-slate-700">
            Exemplo de monitoramento de rede com {mockData.service.softwareName}.
          </p>
        </div>
      </section>
    </Page>
  )
}
