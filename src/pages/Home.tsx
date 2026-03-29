import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Page title="Transformando Ideias em Realidade Tecnológica !" centerTitle>
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="p-2 md:p-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-3 text-center md:p-4">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Conheça Nosso Projeto em Destaque
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-snug text-slate-300">
              Conheça as soluções tecnológicas criadas e desenvolvidas por alunos do CETAM/IBC, unindo inovação e prática.
            </p>

            <div className="mx-auto mt-3 aspect-video w-full max-w-3xl overflow-hidden rounded-xl bg-slate-950/40">
              <img
                src={mockData.home.projectHeroImageSrc}
                alt={mockData.home.projectHeroAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <Link
              to="/sobre"
              className="mt-3 inline-block text-sm font-semibold text-white underline decoration-sky-500/60 underline-offset-4 hover:decoration-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 sm:text-base"
            >
              Inovação em Redes: VoIP, Linux e SNMP para um futuro Sustentável
            </Link>

            <p className="mt-2 text-[10px] text-slate-400">
              Imagem mock — troque em{' '}
              <span className="font-medium text-sky-300">src/mock/mockData.ts</span>
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Sobre</h3>
          <p className="mt-2 text-sm text-slate-300">
            Nome do projeto, resumo e tecnologias utilizadas.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Projeto</h3>
          <p className="mt-2 text-sm text-slate-300">
            Instituição fictícia, setores/andares, inventário e cabeamento estruturado.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-base font-semibold text-white">Serviço</h3>
          <p className="mt-2 text-sm text-slate-300">
            Exemplo de monitoramento de rede com {mockData.service.softwareName}.
          </p>
        </div>
      </section>
    </Page>
  )
}
