import Page from '../components/Page'
import { mockData } from '../mock/mockData'

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-600">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  )
}

export default function Projeto() {
  const { project } = mockData

  return (
    <Page title="Projeto">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-medium text-slate-600">Instituição fictícia</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          {project.fictitiousInstitution.name}
        </h2>
        <p className="mt-3 text-slate-700">{project.fictitiousInstitution.summary}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Setores</h3>
          <ul className="mt-3 space-y-3">
            {project.sectors.map((s) => (
              <li key={s.name} className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{s.name}</p>
                <p className="mt-1 text-sm text-slate-700">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Andares</h3>
          <ul className="mt-3 space-y-3">
            {project.floors.map((f) => (
              <li key={f.name} className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{f.name}</p>
                <p className="mt-1 text-sm text-slate-700">
                  {f.sectors.join(' • ')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">Inventário (exemplo)</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="PCs" value={project.inventory.pcs} />
          <Stat label="Notebooks" value={project.inventory.notebooks} />
          <Stat label="Switches" value={project.inventory.switches} />
          <Stat label="Roteadores" value={project.inventory.routers} />
          <Stat label="Impressoras" value={project.inventory.printers} />
          <Stat label="Telefones VoIP" value={project.inventory.voipPhones} />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">Cabeamento estruturado</h3>
        <p className="mt-3 text-slate-700">{project.cabling.structuredCablingDescription}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {project.cabling.standardsNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Vídeo da planta 3D</h3>
            <p className="mt-2 text-sm text-slate-700">
              Mock: substitua o link em <span className="font-medium">src/mock/mockData.ts</span>
              .
            </p>
          </div>
          <div className="aspect-video w-full bg-slate-100">
            <iframe
              className="h-full w-full"
              src={project.media.plant3dVideoUrl}
              title="Planta 3D"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Planta lógica (Cisco Packet Tracer)
            </h3>
            <p className="mt-2 text-sm text-slate-700">Imagem mock para testes.</p>
          </div>
          <img
            src={project.media.logicalDiagramImageSrc}
            alt="Planta lógica do Cisco Packet Tracer"
            className="h-auto w-full bg-slate-50 object-contain"
            loading="lazy"
          />
        </div>
      </section>
    </Page>
  )
}
