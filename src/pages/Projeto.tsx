import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-slate-950/40 p-4">
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}

export default function Projeto() {
  const { project } = mockData

  return (
    <Page title="Projeto">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-medium text-slate-400">Instituição fictícia</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          {project.fictitiousInstitution.name}
        </h2>
        <p className="mt-3 text-slate-300">{project.fictitiousInstitution.summary}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <article className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-white">Descrição do projeto</h3>
          <div className="mt-4 space-y-4 text-justify text-sm leading-relaxed text-slate-300 sm:text-base">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-medium text-slate-400">Imagem do projeto</p>
          <div className="mt-4 grid min-h-80 flex-1 place-items-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40">
            <p className="px-4 text-center text-sm text-slate-400">
              Espaço reservado para inserir uma imagem
            </p>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div>
            <h3 className="text-lg font-semibold text-white">Setores</h3>
            <ul className="mt-4 space-y-3">
              {project.sectors.map((s) => (
                <li key={s.name} className="rounded-xl bg-slate-950/40 p-4">
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {s.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-full flex-col">
            <h3 className="text-lg font-semibold text-white">Distribuição por Andares</h3>
            <ul className="mt-4 space-y-3">
              {project.floors.map((f) => (
                <li key={f.name} className="rounded-xl bg-slate-950/40 p-4">
                  <p className="text-sm font-semibold text-white">{f.name}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    {f.sectors.join(' • ')}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-1 flex-col">
              <p className="text-sm font-medium text-slate-400">Imagem</p>
              <div className="mt-3 grid min-h-64 flex-1 place-items-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40">
                <p className="px-4 text-center text-sm text-slate-400">
                  Espaço reservado para inserir uma imagem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Inventário (exemplo)</h3>
        <p className="mt-2 text-sm text-slate-300">
          Aproximadamente 49 ativos de rede entre servidores, computadores,
          roteadores, switches, notebooks, impressoras e telefones VoIP.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="Servidores" value={project.inventory.servers} />
          <Stat label="PCs" value={project.inventory.pcs} />
          <Stat label="Notebooks" value={project.inventory.notebooks} />
          <Stat label="Switches" value={project.inventory.switches} />
          <Stat label="Roteadores" value={project.inventory.routers} />
          <Stat label="Impressoras" value={project.inventory.printers} />
          <Stat label="Telefones VoIP" value={project.inventory.voipPhones} />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Cabeamento estruturado</h3>
        <p className="mt-3 text-slate-300">{project.cabling.structuredCablingDescription}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {project.cabling.standardsNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white">Vídeo da planta 3D</h3>
            <p className="mt-2 text-sm text-slate-300">
              Mock: substitua o link em{' '}
              <span className="font-medium text-sky-300">src/mock/mockData.ts</span>.
            </p>
          </div>
          <div className="aspect-video w-full bg-slate-950/40">
            <iframe
              className="h-full w-full"
              src={project.media.plant3dVideoUrl}
              title="Planta 3D"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white">
              Planta lógica (Cisco Packet Tracer)
            </h3>
            <p className="mt-2 text-sm text-slate-300">Imagem mock para testes.</p>
          </div>
          <img
            src={project.media.logicalDiagramImageSrc}
            alt="Planta lógica do Cisco Packet Tracer"
            className="h-auto w-full bg-slate-950/40 object-contain"
            loading="lazy"
          />
        </div>
      </section>

      <div className="flex items-center justify-between gap-3">
        <Link
          to="/sobre"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Voltar
        </Link>

        <Link
          to="/servico"
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:border-slate-700 hover:bg-slate-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          Avançar
        </Link>
      </div>
    </Page>
  )
}
