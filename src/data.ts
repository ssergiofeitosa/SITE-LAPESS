import type { Member, Project, BlogPost, Stat } from './types'

import funmathics1 from './assets/funmathics1.png'
import funmathics2 from './assets/funmathics2.png'
import farmalibras1 from './assets/farmalibras1.png'
import farmalibras2 from './assets/farmalibras2.png'

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Projetos' },
  { value: 30, suffix: '', label: 'Membros' },
  { value: 10, suffix: '', label: 'Mestrandos' },
  { value: 10, suffix: '', label: 'Doutorandos' },
]

export const members: Member[] = [
  {
    name: 'José Victor Cruz Rebouças',
    role: 'Desenvolvedor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Ana Clara Santana Damasceno',
    role: 'Psicóloga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Ricardo Argenton Ramos',
    role: 'Orientador',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Maria Eduarda Silva',
    role: 'Pesquisadora',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Lucas Ferreira Santos',
    role: 'Desenvolvedor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Beatriz Oliveira Costa',
    role: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
]

export const projects: Project[] = [
  {
    title: 'Funmathics',
    description:
      'O Funmathics é uma plataforma web desenvolvida para auxiliar no acompanhamento e no processo de aprendizagem de crianças com discalculia, oferecendo recursos de apoio pedagógico e monitoramento do desempenho em habilidades matemáticas. O projeto é coordenado pelo Laboratório de Pesquisas em Engenharia de Software do Sertão (LaPESS) em parceria com a Universidade Federal do Vale do São Francisco (Univasf).',
    images: [funmathics1, funmathics2],
  },
  {
    title: 'FarmaLibras',
    description:
      'O FarmaLibras é um programa de alcance nacional voltado à acessibilidade na área farmacêutica para pessoas surdas, por meio da Língua Brasileira de Sinais (Libras). Surgiu inicialmente como um vocabulário terminográfico bilíngue (Português–Libras) de termos farmacêuticos e foi ampliado para incluir um aplicativo web e um curso de Libras para farmacêuticos. O programa é coordenado pela Universidade Federal do Vale do São Francisco (Univasf) em parceria com o Conselho Federal de Farmácia (CFF), que também oferece formação pela plataforma Edu.farma.',
    images: [farmalibras1, farmalibras2],
  },
]

export const posts: BlogPost[] = [
  {
    title: 'Lorem Ipsum Dolor Samet From Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend a eu justo. Proin vel leo nec turpis tempus feugiat in sit amet augue. Proin vel leo nec turpis tempus feugiat in sit.',
    date: '08/12/2025',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Lorem Ipsum Dolor Samet From Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend a eu justo. Proin vel leo nec turpis tempus feugiat in sit amet augue. Proin vel leo nec turpis tempus feugiat in sit.',
    date: '08/12/2025',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Lorem Ipsum Dolor Samet From Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo a purus feugiat eleifend a eu justo. Proin vel leo nec turpis tempus feugiat in sit amet augue. Proin vel leo nec turpis tempus feugiat in sit.',
    date: '08/12/2025',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    image:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]
