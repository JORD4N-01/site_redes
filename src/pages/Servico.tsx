import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

export default function Servico() {
  const { service } = mockData

  return (
    <Page title="Serviço">
      <section className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-medium text-slate-400">{service.title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {service.softwareName}
          </h2>
          <p className="mt-3 text-slate-300">{service.description}</p>

          <p className="mt-4 text-justify text-sm leading-relaxed text-slate-300 sm:text-base">
            O {service.softwareName} é uma plataforma de monitoramento de infraestrutura e
            aplicações, usada para acompanhar disponibilidade e desempenho de servidores,
            redes e serviços. Ele centraliza métricas e eventos em um painel web, permitindo
            detectar problemas cedo com alertas automáticos.
          </p>

          <h3 className="mt-6 text-base font-semibold text-white">Como funciona (resumo)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Coleta de dados por agentes, SNMP, checks ativos/passivos e integrações.
            </li>
            <li>
              Triggers e ações para alertar por e-mail/Telegram/integrações (conforme
              configuração).
            </li>
            <li>
              Dashboards e históricos para análise, capacity planning e relatórios.
            </li>
          </ul>

          <h3 className="mt-6 text-base font-semibold text-white">O que monitorar</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {service.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="flex min-h-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 sm:min-h-96 lg:min-h-full">
          <img
            src={service.softwareImageSrc}
            alt={service.softwareName}
            className="h-full w-full bg-slate-950/40 object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <div className="flex items-center justify-between gap-3">
        <Link
          to="/projeto"
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
