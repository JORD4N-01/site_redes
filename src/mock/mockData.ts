import packetTracerImg from '../assets/softwares/packet-tracer.svg'
import zabbixImg from '../assets/softwares/zabbix.svg'
import drawioImg from '../assets/softwares/drawio.svg'
import windowsServerImg from '../assets/softwares/windows-server.svg'
import modeling3dImg from '../assets/softwares/fusion-3d.svg'

import groupPhotoImg from '../assets/people/grupo.svg'
import avatar01 from '../assets/people/avatar-01.svg'
import avatar02 from '../assets/people/avatar-02.svg'
import avatar03 from '../assets/people/avatar-03.svg'
import avatar04 from '../assets/people/avatar-04.svg'
import avatar05 from '../assets/people/avatar-05.svg'
import avatar06 from '../assets/people/avatar-06.svg'

import logicalDiagramImg from '../assets/project/planta-logica-packettracer.svg'

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
  about: {
    projectName: string
    summary: string
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
  about: {
    projectName: 'Infraestrutura, Cabeamento e Monitoramento de Rede (Fictício)',
    summary:
      'Este site apresenta o projeto prático da turma de Redes 2025: planejamento de uma rede corporativa fictícia, incluindo organização por setores/andares, cabeamento estruturado e uma proposta de monitoramento para garantir disponibilidade e desempenho.',
    technologies: [
      {
        id: 'packet-tracer',
        name: 'Cisco Packet Tracer',
        imageSrc: packetTracerImg,
        why:
          'Simulação e validação lógica da topologia (endereçamento, VLANs, roteamento e testes).',
      },
      {
        id: 'drawio',
        name: 'diagrams.net (draw.io)',
        imageSrc: drawioImg,
        why:
          'Documentação do projeto e criação de diagramas de rede/fluxos de forma rápida e padronizada.',
      },
      {
        id: 'zabbix',
        name: 'Zabbix',
        imageSrc: zabbixImg,
        why:
          'Exemplo de ferramenta para monitoramento (disponibilidade, métricas, alertas e histórico).',
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
      name: 'Instituição Fictícia: Rede NorteTech',
      summary:
        'Empresa fictícia de médio porte com três andares, setores administrativos e técnicos, sala de servidores e pontos de rede distribuídos para usuários, impressoras e telefonia VoIP.',
    },
    sectors: [
      {
        name: 'Recepção',
        description: 'Atendimento inicial, cadastro e triagem.',
      },
      {
        name: 'Administração',
        description: 'Financeiro, RH e diretoria.',
      },
      {
        name: 'Laboratório de Informática',
        description: 'Ambiente de treinamento e apoio técnico.',
      },
      {
        name: 'Sala de Servidores (CPD)',
        description: 'Rack, switches, roteadores e servidores.',
      },
      {
        name: 'Suporte / TI',
        description: 'Equipe técnica, manutenção e monitoramento.',
      },
    ],
    floors: [
      {
        name: '1º Andar',
        sectors: ['Recepção', 'Administração'],
      },
      {
        name: '2º Andar',
        sectors: ['Laboratório de Informática'],
      },
      {
        name: '3º Andar',
        sectors: ['Suporte / TI', 'Sala de Servidores (CPD)'],
      },
    ],
    inventory: {
      pcs: 48,
      notebooks: 12,
      switches: 6,
      routers: 2,
      printers: 6,
      voipPhones: 18,
    },
    cabling: {
      structuredCablingDescription:
        'O projeto considera cabeamento estruturado com backbone e distribuição horizontal, patch panels no rack do CPD, e tomadas de telecomunicações por ponto de trabalho. O objetivo é manter organização, facilitar expansão/manutenção e reduzir indisponibilidades.',
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
    softwareName: 'Zabbix',
    softwareImageSrc: zabbixImg,
    description:
      'Como exemplo, utilizamos o Zabbix para demonstrar como seria feito o monitoramento da rede (hosts, serviços e links), com geração de alertas e histórico de métricas para apoiar decisões e manutenção preventiva.',
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
