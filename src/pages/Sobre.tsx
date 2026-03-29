import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Sobre() {
  return (
    <Page title="Sobre">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white">
          {mockData.about.projectName}
        </h2>

        <div className="mt-5 grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div>
            <p className="mt-3 text-justify text-slate-300">{mockData.about.summary}</p>

            <div className="mt-4 space-y-3 text-justify text-slate-300">
              {mockData.about.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-400">Imagem do projeto</p>
            </div>
            <div className="mt-3 grid min-h-72 flex-1 place-items-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <p className="px-4 text-center text-sm text-slate-400">
                Espaço reservado para inserir uma imagem
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Tecnologias utilizadas</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockData.about.technologies.map((tech) => (
            <article
              key={tech.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={tech.imageSrc}
                alt={tech.name}
                className="h-40 w-full bg-slate-950/40 object-contain p-3"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="text-base font-semibold text-white">{tech.name}</h4>
                <p className="mt-2 text-sm text-slate-300">{tech.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}
