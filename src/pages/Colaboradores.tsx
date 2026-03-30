import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

export default function Colaboradores() {
  const { collaborators } = mockData

  return (
    <Page title="Colaboradores">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-white">Foto em conjunto</h2>
        <p className="mt-2 text-sm text-slate-300">
          Placeholder para inserir a foto da turma/professores.
        </p>
        <img
          src={collaborators.groupPhotoSrc}
          alt="Foto em conjunto"
          className="mt-4 h-auto w-full rounded-xl border border-slate-800 bg-slate-950/40 object-cover"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Equipe</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.people.map((person) => (
            <article
              key={person.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={person.photoSrc}
                alt={person.name}
                className="h-40 w-full bg-slate-950/40 object-contain p-4"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-slate-400">{person.role}</p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{person.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between gap-3">
        <Link
          to="/servico"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Voltar
        </Link>

        <Link
          to="/feira"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Avançar
        </Link>
      </div>
    </Page>
  )
}
