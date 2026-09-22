import type { AbaFeed } from '../types'
import { posts } from '../data/posts'
import PostItem from '../components/PostItem'
import { AoVivo, Lupa } from '../components/Icons'

interface Props {
  aoTrocarAba: (a: AbaFeed) => void
  aoAbrirAncora: (tipo: 'produto' | 'servico') => void
}

const abas: { id: AbaFeed; rotulo: string; novidade?: boolean }[] = [
  { id: 'seguindo', rotulo: 'Seguindo' },
  { id: 'perto', rotulo: 'Perto de mim' },
  { id: 'loja', rotulo: 'Loja', novidade: true },
  { id: 'foryou', rotulo: 'Para você' },
]

export default function FeedScreen({ aoTrocarAba, aoAbrirAncora }: Props) {
  return (
    <section className="relative flex h-full flex-col bg-black">
      <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-3.5 px-2.5 pb-2.5 pt-4">
        <button aria-label="Ao vivo" className="flex h-[34px] w-[34px] items-center justify-center">
          <AoVivo />
        </button>

        <div className="flex flex-1 items-center justify-center gap-[13px]">
          {abas.map((a) => (
            <button
              key={a.id}
              onClick={() => aoTrocarAba(a.id)}
              className={`relative min-h-[34px] whitespace-nowrap pb-1.5 text-sm ${
                a.id === 'foryou' ? 'font-bold text-white' : 'font-medium text-white/60'
              }`}
            >
              {a.rotulo}
              {a.novidade && <span className="absolute -right-2 -top-px h-1.5 w-1.5 rounded-full bg-[#E23B2E]" />}
              {a.id === 'foryou' && (
                <span className="absolute bottom-0 left-1/2 h-[2.5px] w-[22px] -translate-x-1/2 rounded-sm bg-white" />
              )}
            </button>
          ))}
        </div>

        <button onClick={() => aoTrocarAba('perto')} aria-label="Buscar" className="flex h-[34px] w-[34px] items-center justify-center">
          <Lupa />
        </button>
      </div>

      <div className="h-full snap-y snap-mandatory overflow-y-auto">
        {posts.map((p) => (
          <PostItem key={p.id} post={p} aoAbrirAncora={aoAbrirAncora} />
        ))}
      </div>
    </section>
  )
}
