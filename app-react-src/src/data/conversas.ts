import type { Conversa } from '../types'
import { foto } from './posts'

export const conversas: Conversa[] = [
  {
    nome: 'Diego M. (nutricionista)',
    previa: 'Perfeito. Levo a avaliação na quinta, pode ser?',
    hora: '18:42',
    naoLida: true,
    img: foto('photo-1490645935967-10de6ba17061', 200),
    verificado: true,
  },
  {
    nome: 'Turma da manhã',
    previa: 'Beatriz: quem vai amanhã às 6h30?',
    hora: '17:10',
    naoLida: true,
    img: foto('photo-1534438327276-14e5300c3a48', 200),
    verificado: false,
  },
  {
    nome: 'Paula A. (personal)',
    previa: 'Mandei o ajuste da semana 4 aí, dá uma olhada',
    hora: 'ontem',
    naoLida: true,
    img: foto('photo-1544367567-0f2fcb009e0b', 200),
    verificado: true,
  },
  {
    nome: 'Gênesis',
    previa: 'Seu checkpoint da semana 2 é quinta-feira.',
    hora: 'seg',
    naoLida: false,
    img: '',
    verificado: false,
    sistema: true,
  },
]
