import Page from '../components/Page'
import { mockData } from '../mock/mockData'

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-slate-950/40 p-4">
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}

export default function Home() {
  const { about, project, service, fair, collaborators } = mockData

  return (
    <Page title="Transformando Ideias em Realidade Tecnológica!" centerTitle>
      <section
        id="inicio"
        className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
      >
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

            <a
              href="#sobre"
              className="mt-3 inline-block text-sm font-semibold text-white underline decoration-sky-500/60 underline-offset-4 hover:decoration-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 sm:text-base"
            >
              {about.projectName}
            </a>

            <p className="mt-2 text-[10px] text-slate-400">
              Imagem do projeto.
            </p>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6"
      >
        <h2 className="text-center text-2xl font-semibold leading-tight text-white">
          {about.projectName}
        </h2>

        <div className="mt-5 grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div>
            <p className="mt-3 text-justify text-slate-300">{about.summary}</p>

            <div className="mt-4 space-y-3 text-justify text-slate-300">
              {about.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-400">Imagem do projeto</p>
            </div>
            <div className="mt-3 grid min-h-72 flex-1 place-items-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <p className="px-4 text-center text-sm text-slate-400">
                Espaço reservado para inserir uma imagem
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Tecnologias utilizadas</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.technologies.map((tech) => (
            <article
              key={tech.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={tech.imageSrc}
                alt={tech.name}
                className="h-40 w-full bg-slate-950/40 object-contain p-3"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="text-base font-semibold text-white">{tech.name}</h4>
                <p className="mt-2 text-sm text-slate-300">{tech.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projeto"
        className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6"
      >
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
                  <p className="mt-1 text-sm text-slate-300">{f.sectors.join(' • ')}</p>
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
          Aproximadamente 49 ativos de rede entre servidores, computadores, roteadores,
          switches, notebooks, impressoras e telefones VoIP.
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

      <section
        id="servico"
        className="scroll-mt-24 grid gap-4 lg:grid-cols-2 lg:items-stretch"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-medium text-slate-400">{service.title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{service.softwareName}</h2>
          <p className="mt-3 text-slate-300">{service.description}</p>

          <p className="mt-4 text-justify text-sm leading-relaxed text-slate-300 sm:text-base">
            O {service.softwareName} é uma plataforma de monitoramento de infraestrutura e
            aplicações, usada para acompanhar disponibilidade e desempenho de servidores,
            redes e serviços. Ele centraliza métricas e eventos em um painel web, permitindo
            detectar problemas cedo com alertas automáticos.
          </p>

          <h3 className="mt-6 text-base font-semibold text-white">Como funciona (resumo)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Coleta de dados por agentes, SNMP, checks ativos/passivos e integrações.</li>
            <li>
              Triggers e ações para alertar por e-mail/Telegram/integrações (conforme
              configuração).
            </li>
            <li>Dashboards e históricos para análise, capacity planning e relatórios.</li>
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

      <section
        id="feira"
        className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6"
      >
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
          Agradecimentos especiais ao Professor Kallel Python e à Pedagoga Barbara Soares
          pelo apoio e orientação.
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

      <section
        id="colaboradores"
        className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6"
      >
        <h2 className="text-lg font-semibold text-white">Foto em conjunto</h2>
        <p className="mt-2 text-sm text-slate-300">
          Placeholder para inserir a foto da turma/professores.
        </p>
        <img
          src={collaborators.groupPhotoSrc}
          alt="Foto em conjunto"
          className="mt-4 h-auto w-full rounded-xl border border-slate-800 bg-slate-950/40 object-cover"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Equipe</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.people.map((person) => (
            <article
              key={person.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={person.photoSrc}
                alt={person.name}
                className="h-40 w-full bg-slate-950/40 object-contain p-4"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-slate-400">{person.role}</p>
                <h3 className="mt-1 text-base font-semibold text-white">{person.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{person.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  )
}
