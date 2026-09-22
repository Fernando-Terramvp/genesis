import type { Produto } from '../types'
import { foto } from './posts'

/** Kits montados por necessidade — a loja da Gênesis não tem vitrine infinita. */
export const kits: Produto[] = [
  {
    nome: 'Kit para começar em casa',
    preco: 'R$ 289',
    nota: '4,8 · 612',
    img: foto('photo-1517836357463-d25dfeac3438', 700),
    parceria: true,
    descricao: 'Halter ajustável, elástico e colchonete',
  },
  {
    nome: 'Kit primeira corrida',
    preco: 'R$ 412',
    nota: '4,7 · 288',
    img: foto('photo-1461896836934-ffe607ba8211', 700),
    parceria: true,
    descricao: 'Tênis de entrada, meia técnica e garrafa',
  },
]

export const produtos: Produto[] = [
  {
    nome: 'Elástico de resistência (3 níveis)',
    preco: 'R$ 79',
    nota: '4,7 · 1.204',
    img: foto('photo-1517836357463-d25dfeac3438', 400),
    parceria: true,
  },
  {
    nome: 'Curso: como montar seu treino',
    preco: 'R$ 119',
    nota: '4,9 · 318',
    img: foto('photo-1571019613454-1cb2f99b2d8b', 400),
    parceria: false,
  },
  {
    nome: 'Colchonete antiderrapante',
    preco: 'R$ 134',
    nota: '4,6 · 842',
    img: foto('photo-1544367567-0f2fcb009e0b', 400),
    parceria: true,
  },
  {
    nome: 'Consultoria de 12 semanas',
    preco: 'R$ 320',
    nota: '5,0 · 96',
    img: foto('photo-1490645935967-10de6ba17061', 400),
    parceria: false,
  },
]
