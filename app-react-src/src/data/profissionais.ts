import type { Profissional, Story, Semana } from '../types'
import { foto } from './posts'

export const profissionais: Profissional[] = [
  {
    nome: 'Diego M.',
    credencial: 'Nutricionista · CRN-4 · 1,2 km',
    preco: 'R$ 220',
    unidade: 'primeira consulta',
    faixa: '78% dos clientes chegaram à semana 12',
    img: foto('photo-1490645935967-10de6ba17061', 200),
  },
  {
    nome: 'Paula A.',
    credencial: 'Personal · CREF 6 · 800 m',
    preco: 'R$ 90',
    unidade: 'por sessão',
    faixa: 'Atende iniciante · pacotes a partir de R$ 320',
    img: foto('photo-1544367567-0f2fcb009e0b', 200),
  },
  {
    nome: 'Rafael S.',
    credencial: 'Psicólogo do esporte · CRP · online',
    preco: 'R$ 160',
    unidade: 'por sessão',
    faixa: 'Trabalha com quem já desistiu antes',
    img: foto('photo-1552674605-db6ffd4facb5', 200),
  },
]

export const stories: Story[] = [
  { nome: 'Sua turma', img: foto('photo-1534438327276-14e5300c3a48', 200), novo: true },
  { nome: 'ricardo.treina', img: foto('photo-1571019613454-1cb2f99b2d8b', 200), novo: true },
  { nome: 'beatriz.corre', img: foto('photo-1461896836934-ffe607ba8211', 200), novo: true },
  { nome: 'diego.nutri', img: foto('photo-1490645935967-10de6ba17061', 200), novo: false },
  { nome: 'paula.personal', img: foto('photo-1544367567-0f2fcb009e0b', 200), novo: false },
  { nome: 'centro.luta', img: foto('photo-1546483875-ad9014c88eba', 200), novo: false },
]

export const semanas: Semana[] = [
  { n: 1, titulo: 'Adaptação', detalhe: '3 treinos de 25 min', estado: 'feita' },
  { n: 2, titulo: 'Checkpoint', detalhe: 'Primeira conversa com o profissional', estado: 'feita', checkpoint: true },
  { n: 3, titulo: 'Consistência', detalhe: '3 treinos · você está aqui', estado: 'atual' },
  { n: 4, titulo: 'Carga', detalhe: 'Aumento leve de intensidade', estado: 'futura' },
  { n: 5, titulo: 'Rotina', detalhe: '3 treinos + mobilidade', estado: 'futura' },
  { n: 6, titulo: 'Checkpoint', detalhe: 'Reavaliação e ajuste do plano', estado: 'futura', checkpoint: true },
  { n: 7, titulo: 'Manutenção', detalhe: '3 treinos na semana', estado: 'futura' },
  { n: 8, titulo: 'Progressão', detalhe: 'Novo estímulo', estado: 'futura' },
  { n: 9, titulo: 'Autonomia', detalhe: 'Você monta um treino', estado: 'futura' },
  { n: 10, titulo: 'Volume', detalhe: '4 treinos na semana', estado: 'futura' },
  { n: 11, titulo: 'Preparação', detalhe: 'Fechamento do ciclo', estado: 'futura' },
  { n: 12, titulo: 'Checkpoint final', detalhe: 'Relatório das 12 semanas', estado: 'futura', checkpoint: true },
]
