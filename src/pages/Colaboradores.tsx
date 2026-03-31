import Page from '../components/Page'
import { Link } from 'react-router-dom'

import groupPhotoFallbackSrc from '../assets/people/grupo.svg'
import groupPhotoSrc from '../assets/people/foto turma com a prof.jpeg'
import instructorPhotoSrc from '../assets/people/Instrutor.png'
import jamillisPhotoSrc from '../assets/people/foto_jamillis.jpeg'
import jordanPhotoSrc from '../assets/people/jordan.jpeg'
import sauloPhotoSrc from '../assets/people/foto_sualo.jpeg'
import manuPhotoSrc from '../assets/people/manu.jpeg'
import thamyresPhotoSrc from '../assets/people/foto_Thamyres.jpeg'
import carlosPhotoSrc from '../assets/people/foto_carlos.jpeg'

type CollaboratorRole = 'Aluno' | 'Professor' | 'Instrutor' | 'Instrutora'

type Collaborator = {
  id: string
  name: string
  role: CollaboratorRole
  description: string
  photoSrc: string
}

const collaborators: { groupPhotoSrc: string; people: Collaborator[] } = {
  groupPhotoSrc,
  people: [
    {
      id: 'i1',
      name: 'Kallel Python',
      role: 'Instrutor',
      description: 'Teaching Specialist - T.I',
      photoSrc: instructorPhotoSrc,
    },
    {
      id: 'i2',
      name: 'Jamillis Silva',
      role: 'Instrutora',
      description: 'Apoio Pedagógico',
      photoSrc: jamillisPhotoSrc,
    },
    {
      id: 'a1',
      name: 'Jordan Cunha',
      role: 'Aluno',
      description: 'Tec. em Redes de Computadores',
      photoSrc: jordanPhotoSrc,
    },
    {
      id: 'a2',
      name: 'Saulo Vinicius',
      role: 'Aluno',
      description: 'Tec. em Redes de Computadores',
      photoSrc: sauloPhotoSrc,
    },
    {
      id: 'a3',
      name: 'Manoel Medeiros',
      role: 'Aluno',
      description: 'Tec. em Redes de Computadores',
      photoSrc: manuPhotoSrc,
    },
    {
      id: 'a4',
      name: 'Thamirys Ribeiro',
      role: 'Aluno',
      description: 'Tec. em Redes de Computadores',
      photoSrc: thamyresPhotoSrc,
    },
    {
      id: 'a5',
      name: 'Carlos Alberto',
      role: 'Aluno',
      description: 'Tec. em Redes de Computadores',
      photoSrc: carlosPhotoSrc,
    },
  ],
}

export default function Colaboradores() {
  return (
    <Page title="Colaboradores">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-white">Foto em conjunto</h2>
        <p className="mt-2 text-sm text-slate-300">
          Registro da turma e instrutores.
        </p>
        <img
          src={collaborators.groupPhotoSrc}
          alt="Foto turma com prof"
          className="mt-4 h-auto w-full rounded-xl border border-slate-800 bg-slate-950/40 object-cover"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = groupPhotoFallbackSrc
          }}
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Equipe</h2>
        <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.people.map((person) => (
            <article
              key={person.id}
              className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="flex justify-center p-7 pb-0">
                <div className="h-40 w-40 overflow-hidden rounded-full border border-slate-800 bg-slate-950/40">
                  <img
                    src={person.photoSrc}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-7 pt-5">
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

      <div className="flex items-center justify-start">
        <Link
          to="/feira"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Voltar
        </Link>
      </div>
    </Page>
  )
}
