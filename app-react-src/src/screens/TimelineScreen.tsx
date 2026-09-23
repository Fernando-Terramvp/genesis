import type { AbaFeed } from '../types'
import { posts, idsSeguindo } from '../data/posts'
import { stories } from '../data/profissionais'
import TimelinePost from '../components/TimelinePost'
import { Marca, Lupa } from '../components/Icons'

interface Props {
  aba: 'foryou' | 'seguindo'
  aoTrocarAba: (a: AbaFeed) => void
  aoAbrirVideo: (id: string) => void
  aoAbrirAncora: (tipo: 'produto' | 'servico') => void
  aoPublicar: () => void
}

const abas: { id: AbaFeed; rotulo: string; novidade?: boolean }[] = [
  { id: 'foryou', rotulo: 'Para você' },
  { id: 'seguindo', rotulo: 'Seguindo' },
  { id: 'perto', rotulo: 'Perto de mim' },
  { id: 'loja', rotulo: 'Loja', novidade: true },
]

export default function TimelineScreen({ aba, aoTrocarAba, aoAbrirVideo, aoAbrirAncora, aoPublicar }: Props) {
  const lista = aba === 'seguindo' ? posts.filter((p) => idsSeguindo.includes(p.id)) : posts

  return (
    <section className="flex h-full flex-col bg-papel">
      <header className="shrink-0 border-b border-[#F0F0EC]">
        <div className="flex items-center gap-2.5 px-4 pb-1 pt-3.5">
          <span className="text-grafite">
            <Marca tamanho={26} />
          </span>
          <span className="flex-1 text-[17px] font-semibold tracking-tight">Gênesis</span>
          <button onClick={() => aoTrocarAba('perto')} aria-label="Buscar" className="flex h-11 w-11 items-center justify-center">
            <Lupa cor="#1C1C1A" tamanho={20} />
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto px-4">
          {abas.map((a) => {
            const ativa = a.id === aba
            return (
              <button
                key={a.id}
                onClick={() => aoTrocarAba(a.id)}
                className={`relative min-h-11 whitespace-nowrap pb-2.5 text-sm ${
                  ativa ? 'font-bold text-grafite' : 'font-medium text-pedra'
                }`}
              >
                {a.rotulo}
                {a.novidade && <span className="absolute -right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#E23B2E]" />}
                {ativa && <span className="absolute inset-x-0 bottom-0 h-[2.5px] rounded-sm bg-grafite" />}
              </button>
            )
          })}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        {/* stories, como no Instagram */}
        <div className="flex gap-3.5 overflow-x-auto border-b border-[#F0F0EC] px-4 py-3">
          {stories.map((s) => (
            <button key={s.nome} className="flex w-[64px] shrink-0 flex-col items-center gap-1.5">
              <span className={`h-[58px] w-[58px] rounded-full p-[2.5px] ${s.novo ? 'bg-[linear-gradient(140deg,#E8A33D,#C97B1F)]' : 'bg-regua'}`}>
                <img src={s.img} alt="" className="h-full w-full rounded-full border-[2.5px] border-papel object-cover" />
              </span>
              <span className="w-full truncate text-center text-[10.5px] text-tinta">{s.nome}</span>
            </button>
          ))}
        </div>

        {/* compositor, como no Threads */}
        <button
          onClick={aoPublicar}
          className="flex w-full items-center gap-3 border-b border-[#F0F0EC] px-4 py-3.5 text-left"
        >
          <img src={stories[0].img} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
          <span className="flex-1 text-sm text-pedra">No que você treinou hoje?</span>
          <span className="rounded-full bg-grafite px-3.5 py-2 text-xs font-semibold text-white">Publicar</span>
        </button>

        {lista.map((p) => (
          <TimelinePost key={p.id} post={p} aoAbrirVideo={aoAbrirVideo} aoAbrirAncora={aoAbrirAncora} />
        ))}

        <p className="px-5 pb-6 pt-4 text-center text-[11px] leading-relaxed text-pedra">
          {aba === 'seguindo'
            ? 'Você vê aqui só a sua turma e quem você segue.'
            : 'Protótipo — Processo Seletivo 2026.2, Consulting Club UFRJ.'}
        </p>
      </div>
    </section>
  )
}
