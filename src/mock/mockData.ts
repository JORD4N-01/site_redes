import packetTracerImg from '../assets/softwares/packet-tracer.svg'
import windowsServerImg from '../assets/softwares/windows-server.svg'
import modeling3dImg from '../assets/softwares/fusion-3d.svg'
import ubuntuImg from '../assets/softwares/ubuntu.svg'
import asteriskImg from '../assets/softwares/asterisk.svg'

import groupPhotoImg from '../assets/people/grupo.svg'
import avatar01 from '../assets/people/avatar-01.svg'
import avatar02 from '../assets/people/avatar-02.svg'
import avatar03 from '../assets/people/avatar-03.svg'
import avatar04 from '../assets/people/avatar-04.svg'
import avatar05 from '../assets/people/avatar-05.svg'
import avatar06 from '../assets/people/avatar-06.svg'

import logicalDiagramImg from '../assets/project/planta-logica-packettracer.svg'
import projectHeroImg from '../assets/project/hero-projeto.svg'

export type CollaboratorRole = 'Aluno' | 'Professor'

export interface Collaborator {
  id: string
  name: string
  role: CollaboratorRole
  photoSrc: string
}

export interface Technology {
  id: string
  name: string
  imageSrc: string
  why: string
}

export interface Sector {
  name: string
  description: string
}

export interface Floor {
  name: string
  sectors: string[]
}

export interface Inventory {
  servers: number
  pcs: number
  notebooks: number
  switches: number
  routers: number
  printers: number
  voipPhones: number
}

export interface ProjectData {
  fictitiousInstitution: {
    name: string
    summary: string
  }
  description: string[]
  sectors: Sector[]
  floors: Floor[]
  inventory: Inventory
  cabling: {
    structuredCablingDescription: string
    standardsNotes: string[]
  }
  media: {
    plant3dVideoUrl: string
    logicalDiagramImageSrc: string
  }
}

export interface SiteData {
  institution: {
    name: string
    cityState: string
    classProject: string
    course: string
    fairNote: string
  }
  home: {
    projectHeroImageSrc: string
    projectHeroAlt: string
  }
  about: {
    projectName: string
    summary: string
    details: string[]
    technologies: Technology[]
  }
  project: ProjectData
  service: {
    title: string
    softwareName: string
    softwareImageSrc: string
    description: string
    keyFeatures: string[]
  }
  collaborators: {
    groupPhotoSrc: string
    people: Collaborator[]
  }
}

export const mockData: SiteData = {
  institution: {
    name: 'CETAM',
    cityState: 'Manaus - AM',
    classProject: 'Projeto da turma de Redes 2025',
    course: 'Curso Técnico em Redes de Computadores',
    fairNote:
      'Projeto desenvolvido com participação e apresentação na Feira em Brasília.',
  },
  home: {
    projectHeroImageSrc: projectHeroImg,
    projectHeroAlt: 'Imagem representativa do projeto (mock)',
  },
  about: {
    projectName:
      'Inovação em Redes: VoIP, Linux e SNMP para um futuro Sustentável',
    summary:
      'Projeto desenvolvido por estudantes do CETAM (Centro de Educação Tecnológica do Amazonas), com foco na implementação de uma infraestrutura de rede corporativa eficiente, segura e gerenciável. A proposta busca integrar sistemas e otimizar a comunicação interna, demonstrando a aplicação prática de conhecimentos técnicos em um cenário realista do ambiente empresarial.',
    details: [
      'O principal objetivo é criar uma rede estruturada para uma agência bancária, garantindo conectividade estável, alto desempenho e proteção de dados sensíveis. Além disso, o projeto contempla a integração de comunicação por VoIP, facilitando a troca de informações entre os setores.',
      'A solução foi planejada para atender às necessidades específicas de cada área da organização, proporcionando uma experiência prática completa em gestão, monitoramento e segurança de redes corporativas, além de reforçar boas práticas de infraestrutura e governança de TI.',
    ],
    technologies: [
      {
        id: 'packet-tracer',
        name: 'Cisco Packet Tracer',
        imageSrc: packetTracerImg,
        why:
          'Simulação e validação lógica da topologia (endereçamento, VLANs, roteamento e testes).',
      },
      {
        id: 'ubuntu',
        name: 'Linux Ubuntu',
        imageSrc: ubuntuImg,
        why:
          'Sistema operacional usado como base para hospedar serviços do projeto, incluindo o Asterisk (VoIP) e o firewall.',
      },
      {
        id: 'asterisk',
        name: 'Asterisk (VoIP)',
        imageSrc: asteriskImg,
        why:
          'Software de VoIP utilizado para integrar a comunicação interna, com foco em telefonia IP e ramais por setor.',
      },
      {
        id: 'windows-server',
        name: 'Windows Server (exemplo)',
        imageSrc: windowsServerImg,
        why:
          'Referência para serviços de rede comuns em ambientes corporativos (AD/DNS/DHCP) conforme o escopo do projeto.',
      },
      {
        id: '3d',
        name: 'Software de modelagem 3D (exemplo)',
        imageSrc: modeling3dImg,
        why:
          'Representação visual dos ambientes e da distribuição física (racks, salas e rotas de cabeamento).',
      },
    ],
  },
  project: {
    fictitiousInstitution: {
      name: 'Banco Raiz do Norte',
      summary:
        'Banco fictício dividido em 7 setores distribuídos em dois andares, com segmentação por VLANs, VoIP e monitoramento via SNMP.',
    },
    description: [
      'A agência bancária é estruturada em sete setores distribuídos em dois andares. No 1º andar estão os setores de Atendimento, Atendimento-2 e Sala de TI; no 2º andar, Sala do Gerente, Atendimento VIP, Sala de Reunião e Sala de TI-2.',
      'A rede é segmentada logicamente por meio de VLANs, garantindo isolamento entre os departamentos, maior segurança da informação e melhor desempenho da infraestrutura.',
      'O ambiente conta com aproximadamente 49 ativos de rede, incluindo servidores, computadores, roteadores, switches, notebooks, impressoras e telefones VoIP. Também foi implementado cabeamento estruturado, assegurando organização, escalabilidade, confiabilidade e redução de custos operacionais.',
      'A adoção de VoIP reduziu significativamente os custos com comunicação interna, substituindo linhas telefônicas convencionais. Além disso, o uso de SNMP em plataforma livre permite monitoramento em tempo real, facilitando a detecção de falhas e aumentando a eficiência e estabilidade da rede. A solução proposta é escalável e atende tanto às demandas atuais quanto futuras, promovendo eficiência operacional, economia e sustentabilidade.',
    ],
    sectors: [
      {
        name: 'Atendimento',
        description:
          'Responsável pelo atendimento direto ao cliente, realizando operações bancárias e suporte inicial.',
      },
      {
        name: 'Atendimento-2',
        description:
          'Setor de apoio ao atendimento principal, auxiliando na demanda operacional e na continuidade dos serviços.',
      },
      {
        name: 'Sala de TI',
        description:
          'Responsável pela administração da infraestrutura de rede, suporte técnico, monitoramento e segurança dos sistemas.',
      },
      {
        name: 'Sala do Gerente',
        description:
          'Ambiente destinado à gestão administrativa, supervisão das operações e tomada de decisões estratégicas.',
      },
      {
        name: 'Atendimento VIP',
        description:
          'Setor dedicado ao atendimento personalizado e prioritário de clientes, com maior nível de confidencialidade e qualidade de serviço.',
      },
      {
        name: 'Sala de Reunião',
        description:
          'Espaço destinado a reuniões internas, alinhamentos estratégicos e atividades colaborativas.',
      },
      {
        name: 'Sala de TI-2',
        description:
          'Área de apoio técnico, utilizada para expansão da infraestrutura, pontos adicionais de rede e suporte operacional.',
      },
    ],
    floors: [
      {
        name: '1º Andar',
        sectors: ['Atendimento', 'Atendimento-2', 'Sala de TI'],
      },
      {
        name: '2º Andar',
        sectors: ['Sala do Gerente', 'Atendimento VIP', 'Sala de Reunião', 'Sala de TI-2'],
      },
    ],
    inventory: {
      servers: 2,
      pcs: 20,
      notebooks: 6,
      switches: 6,
      routers: 2,
      printers: 5,
      voipPhones: 8,
    },
    cabling: {
      structuredCablingDescription:
        'Houve a implementação de cabeamento estruturado, proporcionando maior produtividade, segurança, conectividade, confiança, escalabilidade e redução de custos.',
      standardsNotes: [
        'Separação lógica por VLANs (usuários, voz, servidores, gerenciamento).',
        'Identificação de cabos e portas (etiquetagem) para rastreabilidade.',
        'Rotas físicas planejadas (eletrocalhas/canaletas) evitando interferências.',
      ],
    },
    media: {
      plant3dVideoUrl: 'https://www.youtube.com/embed/SEU_VIDEO_DA_PLANTA_3D',
      logicalDiagramImageSrc: logicalDiagramImg,
    },
  },
  service: {
    title: 'Serviço de Monitoramento',
    softwareName: 'Monitoramento SNMP (exemplo)',
    softwareImageSrc: ubuntuImg,
    description:
      'Exemplo de serviço para demonstrar o monitoramento da rede (hosts, serviços e links) via SNMP, com alertas e histórico de métricas para apoiar decisões e manutenção preventiva.',
    keyFeatures: [
      'Coleta de métricas (CPU, RAM, disco, interfaces e disponibilidade).',
      'Alertas por limiar e notificações por evento.',
      'Dashboards para acompanhamento por setor/andar.',
      'Histórico e relatórios para análise de capacidade.',
    ],
  },
  collaborators: {
    groupPhotoSrc: groupPhotoImg,
    people: [
      { id: 'p1', name: 'Aluno(a) 01', role: 'Aluno', photoSrc: avatar01 },
      { id: 'p2', name: 'Aluno(a) 02', role: 'Aluno', photoSrc: avatar02 },
      { id: 'p3', name: 'Aluno(a) 03', role: 'Aluno', photoSrc: avatar03 },
      { id: 'p4', name: 'Aluno(a) 04', role: 'Aluno', photoSrc: avatar04 },
      { id: 't1', name: 'Professor(a) 01', role: 'Professor', photoSrc: avatar05 },
      { id: 't2', name: 'Professor(a) 02', role: 'Professor', photoSrc: avatar06 },
    ],
  },
}
