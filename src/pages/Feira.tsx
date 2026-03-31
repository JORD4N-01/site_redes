import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

export default function Feira() {
  const { fair } = mockData

  return (
    <Page title="Feira Nacional de Inovação">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-medium text-slate-400">{fair.location}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{fair.title}</h2>
        <p className="mt-3 text-justify text-slate-300">{fair.intro}</p>

        <div className="mt-4 space-y-3 text-justify text-slate-300">
          {fair.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Registros (mock)</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fair.images.slice(0, 3).map((img) => (
            <article
              key={img.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full bg-slate-950/40 object-contain p-4"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Agradecimentos</h3>
        <p className="mt-3 text-justify text-slate-300">{fair.thanksText}</p>

        <p className="mt-3 text-justify text-slate-300">
          Agradecimentos especiais ao Professor Kallel Python e à Pedagoga Bárbara
          Soares pelo apoio e orientação.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
          <img
            src={fair.images[3].src}
            alt={fair.images[3].alt}
            className="h-auto w-full object-contain"
            loading="lazy"
          />
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
          to="/colaboradores"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Avançar
        </Link>
      </div>
    </Page>
  )
}
