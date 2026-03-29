import Page from '../components/Page'
import { mockData } from '../mock/mockData'

export default function Servico() {
  const { service } = mockData

  return (
    <Page title="Serviço">
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-600">{service.title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            {service.softwareName}
          </h2>
          <p className="mt-3 text-slate-700">{service.description}</p>

          <h3 className="mt-6 text-base font-semibold text-slate-900">O que monitorar</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {service.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img
            src={service.softwareImageSrc}
            alt={service.softwareName}
            className="h-full w-full bg-slate-50 object-contain p-6"
            loading="lazy"
          />
        </div>
      </section>
    </Page>
  )
}
