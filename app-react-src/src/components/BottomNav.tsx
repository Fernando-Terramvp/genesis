import type { Tela } from '../types'
import { Casa, Lupa, Mais, Balao, Pessoa } from './Icons'

interface Props {
  ativa: Tela
  aoNavegar: (t: Tela) => void
  aoPublicar: () => void
}

/** A aba do feed também fica acesa quando o usuário está em "Seguindo". */
const grupo = (t: Tela): Tela => (t === 'seguindo' ? 'feed' : t === 'loja' ? 'explorar' : t)

export default function BottomNav({ ativa, aoNavegar, aoPublicar }: Props) {
  const atual = grupo(ativa)
  const item = (t: Tela) => (atual === t ? 'text-grafite font-semibold' : 'text-nevoa font-medium')

  return (
    <nav className="flex h-16 shrink-0 items-center justify-around border-t border-regua bg-papel px-1.5">
      <button onClick={() => aoNavegar('feed')} className={`flex min-h-[52px] w-[62px] flex-col items-center justify-center gap-[3px] ${item('feed')}`}>
        <Casa />
        <span className="text-[10px]">Início</span>
      </button>

      <button onClick={() => aoNavegar('explorar')} className={`flex min-h-[52px] w-[62px] flex-col items-center justify-center gap-[3px] ${item('explorar')}`}>
        <Lupa cor="currentColor" tamanho={22} />
        <span className="text-[10px]">Explorar</span>
      </button>

      <button onClick={aoPublicar} aria-label="Publicar ou registrar treino" className="flex w-[62px] items-center justify-center">
        <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-grafite">
          <Mais />
        </span>
      </button>

      <button onClick={() => aoNavegar('mensagens')} className={`relative flex min-h-[52px] w-[62px] flex-col items-center justify-center gap-[3px] ${item('mensagens')}`}>
        <span className="absolute right-2.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-barro px-1 text-[9px] font-bold text-white">3</span>
        <Balao cor="currentColor" tamanho={22} />
        <span className="text-[10px]">Mensagens</span>
      </button>

      <button onClick={() => aoNavegar('perfil')} className={`flex min-h-[52px] w-[62px] flex-col items-center justify-center gap-[3px] ${item('perfil')}`}>
        <Pessoa />
        <span className="text-[10px]">Perfil</span>
      </button>
    </nav>
  )
}
