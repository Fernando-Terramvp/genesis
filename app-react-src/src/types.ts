export type Tela = 'feed' | 'seguindo' | 'loja' | 'explorar' | 'mensagens' | 'perfil'

export type AbaFeed = 'seguindo' | 'perto' | 'loja' | 'foryou'

export type Audiencia = 'turma' | 'seguidores' | 'publico'

export interface Ancora {
  tipo: 'produto' | 'servico'
  nome: string
  acao: string
  img: string
}

/** Texto e foto vivem na timeline; vídeo abre em tela cheia ao ser tocado. */
export type TipoPost = 'texto' | 'foto' | 'video' | 'treino' | 'marco'

export interface RegistroTreino {
  atividade: string
  duracao: string
  semana: number
  sensacao: string
}

export interface Post {
  id: string
  tipo: TipoPost
  autor: string
  nome: string
  verificado: boolean
  foto: string
  tempo: string
  texto: string
  img?: string
  curtidas: string
  respostas: string
  reposts: string
  salvos: string
  compartilhamentos: string
  musica?: string
  capa?: string
  duracaoVideo?: string
  ancora: Ancora | null
  registro?: RegistroTreino
  progresso?: number
  respondendoA?: string
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
