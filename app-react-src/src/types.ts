export type Tela = 'feed' | 'seguindo' | 'loja' | 'explorar' | 'mensagens' | 'perfil'

export type AbaFeed = 'seguindo' | 'perto' | 'loja' | 'foryou'

export type Audiencia = 'turma' | 'seguidores' | 'publico'

export interface Ancora {
  tipo: 'produto' | 'servico'
  nome: string
  acao: string
  img: string
}

export interface Post {
  id: string
  autor: string
  nome: string
  verificado: boolean
  foto: string
  img: string
  desc: string
  curtidas: string
  comentarios: string
  salvos: string
  compartilhamentos: string
  musica: string
  capa: string
  ancora: Ancora | null
  marco?: boolean
  progresso?: number
}

export interface Story {
  nome: string
  img: string
  novo: boolean
}

export interface Profissional {
  nome: string
  credencial: string
  preco: string
  unidade: string
  faixa: string
  img: string
}

export interface Produto {
  nome: string
  preco: string
  nota: string
  img: string
  parceria: boolean
  descricao?: string
}

export interface Conversa {
  nome: string
  previa: string
  hora: string
  naoLida: boolean
  img: string
  verificado: boolean
  sistema?: boolean
}

export interface Semana {
  n: number
  titulo: string
  detalhe: string
  estado: 'feita' | 'atual' | 'futura'
  checkpoint?: boolean
}
