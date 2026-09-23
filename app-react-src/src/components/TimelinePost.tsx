import { useState } from 'react'
import type { Post } from '../types'
import { Selo, Coracao, Balao, Repost, Compartilhar, Pontos, Play, Relogio, Check } from './Icons'

interface Props {
  post: Post
  aoAbrirVideo: (id: string) => void
  aoAbrirAncora: (tipo: 'produto' | 'servico') => void
}

/**
 * O post da timeline: texto primeiro, como no Threads; mídia quando existe,
 * como no Instagram. Vídeo não toca aqui — abre em tela cheia.
 */
export default function TimelinePost({ post, aoAbrirVideo, aoAbrirAncora }: Props) {
  const [curtido, setCurtido] = useState(false)
  const [repostado, setRepostado] = useState(false)

  return (
    <article className="border-b border-[#F0F0EC] px-4 py-3.5">
      <div className="flex gap-3">
        <img src={post.foto} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-[14.5px] font-semibold">{post.nome}</span>
            {post.verificado && <Selo tamanho={14} />}
            <span className="truncate text-[13px] text-pedra">@{post.autor}</span>
            <span className="text-[13px] text-pedra">· {post.tempo}</span>
            <button aria-label="Mais opções" className="ml-auto shrink-0 pl-2">
              <Pontos />
            </button>
          </div>

          {post.respondendoA && (
            <div className="mt-0.5 text-[12.5px] text-pedra">
              respondendo a <span className="text-tinta">@{post.respondendoA}</span>
            </div>
          )}

          <p className="mt-1.5 whitespace-pre-line text-[14.5px] leading-normal text-grafite">{post.texto}</p>

          {/* mídia */}
          {post.img && post.tipo !== 'marco' && (
            <button
              onClick={() => post.tipo === 'video' && aoAbrirVideo(post.id)}
              className="relative mt-2.5 block w-full overflow-hidden rounded-2xl border border-regua"
              aria-label={post.tipo === 'video' ? 'Abrir vídeo em tela cheia' : 'Ver foto'}
            >
              <img src={post.img} alt="" className="block max-h-[260px] w-full object-cover" />
              {post.tipo === 'video' && (
                <>
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 backdrop-blur-[2px]">
                    <Play tamanho={24} />
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/60 px-2 py-1 text-[11px] font-semibold text-white">
                    {post.duracaoVideo}
                  </span>
                </>
              )}
            </button>
          )}

          {/* treino registrado: o registro vira post sozinho */}
          {post.registro && (
            <div className="mt-2.5 flex items-center gap-3 rounded-2xl border border-regua bg-cal px-3.5 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ambar">
                <Check tamanho={18} grossura={3} />
              </span>
              <div className="flex-1">
                <div className="text-[13.5px] font-semibold">
                  {post.registro.atividade} · {post.registro.duracao}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-pedra">
                  <Relogio tamanho={12} />
                  Semana {post.registro.semana} · {post.registro.sensacao}
                </div>
              </div>
            </div>
          )}

          {/* marco da trilha */}
          {post.tipo === 'marco' && (
            <div className="mt-2.5 overflow-hidden rounded-2xl border border-ambar/50">
              {post.img && <img src={post.img} alt="" className="block max-h-[200px] w-full object-cover" />}
              <div className="bg-ambarfraco px-3.5 py-3">
                <div className="text-[13px] font-bold uppercase tracking-wider text-ambartexto">12 semanas concluídas</div>
                <div className="mt-2 h-[6px] overflow-hidden rounded-sm bg-white/70">
                  <i className="block h-[6px] rounded-sm bg-ambar" style={{ width: `${post.progresso ?? 100}%` }} />
                </div>
              </div>
            </div>
          )}

          {/* produto ou serviço ancorado */}
          {post.ancora && (
            <div className="mt-2.5 flex items-center gap-2.5 rounded-xl border border-regua p-2">
              <img src={post.ancora.img} alt="" className="h-11 w-11 shrink-0 rounded-lg object-cover" />
              <span className="flex-1 truncate text-[12.5px] font-semibold">{post.ancora.nome}</span>
              <button
                onClick={() => aoAbrirAncora(post.ancora!.tipo)}
                className="min-h-10 rounded-lg bg-ambar px-3.5 text-xs font-bold text-grafite"
              >
                {post.ancora.acao}
              </button>
            </div>
          )}

          {/* ações, no espaçamento do Threads */}
          <div className="-ml-2 mt-2 flex items-center gap-1">
            <button
              onClick={() => setCurtido((c) => !c)}
              aria-label="Curtir"
              className="flex min-h-11 items-center gap-1.5 px-2 text-[12.5px] text-pedra"
            >
              <Coracao tamanho={19} cor={curtido ? '#E8534A' : '#1C1C1A'} preenchido={curtido} />
              {post.curtidas}
            </button>
            <button aria-label="Responder" className="flex min-h-11 items-center gap-1.5 px-2 text-[12.5px] text-pedra">
              <Balao tamanho={19} cor="#1C1C1A" />
              {post.respostas}
            </button>
            <button
              onClick={() => setRepostado((r) => !r)}
              aria-label="Repostar"
              className="flex min-h-11 items-center gap-1.5 px-2 text-[12.5px] text-pedra"
            >
              <Repost cor={repostado ? '#1F7A5A' : '#1C1C1A'} />
              {post.reposts}
            </button>
            <button aria-label="Compartilhar" className="flex min-h-11 items-center px-2">
              <Compartilhar tamanho={19} cor="#1C1C1A" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
