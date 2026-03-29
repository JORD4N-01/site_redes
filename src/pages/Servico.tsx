import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Servico() {
  const { service } = mockData

  return (
    <Page title="Serviço">
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-medium text-slate-400">{service.title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {service.softwareName}
          </h2>
          <p className="mt-3 text-slate-300">{service.description}</p>

          <h3 className="mt-6 text-base font-semibold text-white">O que monitorar</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {service.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <img
            src={service.softwareImageSrc}
            alt={service.softwareName}
            className="h-full w-full bg-slate-950/40 object-contain p-6"
            loading="lazy"
          />
        </div>
      </section>
    </Page>
  )
}
