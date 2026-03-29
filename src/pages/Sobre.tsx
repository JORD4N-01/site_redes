import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Sobre() {
  return (
    <Page title="Sobre">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-medium text-slate-600">Nome do projeto</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          {mockData.about.projectName}
        </h2>
        <p className="mt-3 text-slate-700">{mockData.about.summary}</p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">Tecnologias utilizadas</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockData.about.technologies.map((tech) => (
            <article
              key={tech.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <img
                src={tech.imageSrc}
                alt={tech.name}
                className="h-40 w-full bg-slate-50 object-contain p-3"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="text-base font-semibold text-slate-900">{tech.name}</h4>
                <p className="mt-2 text-sm text-slate-700">{tech.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}
