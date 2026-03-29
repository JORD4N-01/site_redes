import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Colaboradores() {
  const { collaborators } = mockData

  return (
    <Page title="Colaboradores">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Foto em conjunto</h2>
        <p className="mt-2 text-sm text-slate-700">
          Placeholder para inserir a foto da turma/professores.
        </p>
        <img
          src={collaborators.groupPhotoSrc}
          alt="Foto em conjunto"
          className="mt-4 h-auto w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Equipe</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.people.map((person) => (
            <article
              key={person.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <img
                src={person.photoSrc}
                alt={person.name}
                className="h-40 w-full bg-slate-50 object-contain p-4"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-slate-600">{person.role}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">
                  {person.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}
