
import Page from '../components/Page'
import { mockData } from '../mock/mockData'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Page title="Transformando Ideias em Realidade Tecnológica !" centerTitle>
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="p-5 md:p-7">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-center md:p-8">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Conheça Nosso Projeto em Destaque
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-snug text-slate-300">
              Conheça as soluções tecnológicas criadas e desenvolvidas por alunos do CETAM/IBC, unindo inovação e prática.
            </p>

            <div className="mx-auto mt-6 h-64 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40 sm:h-72 md:h-80 lg:h-96">
              <img
                src={mockData.home.projectHeroImageSrc}
                alt={mockData.home.projectHeroAlt}
                className="h-full w-full object-contain p-1 sm:p-2"
                loading="lazy"
              />
            </div>

            <Link
              to="/sobre"
              className="mt-3 inline-block text-sm font-semibold text-white underline decoration-sky-500/60 underline-offset-4 hover:decoration-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 sm:text-base"
            >
              {mockData.about.projectName}
            </Link>

            <p className="mt-2 text-[10px] text-slate-400">
              Imagem mock — troque em{' '}
              <span className="font-medium text-sky-300">src/mock/mockData.ts</span>
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}
