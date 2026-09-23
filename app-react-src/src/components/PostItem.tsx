import { useRef, useState } from 'react'
import type { Post } from '../types'
import { Coracao, Balao, Marcador, Compartilhar, Nota, Selo, Mais, Play } from './Icons'

interface Props {
  post: Post
  aoAbrirAncora: (tipo: 'produto' | 'servico') => void
}

/** O post em tela cheia, no formato do TikTok. Só vídeos entram aqui. */
export default function PostItem({ post, aoAbrirAncora }: Props) {
  const [curtido, setCurtido] = useState(false)
  const [batendo, setBatendo] = useState(false)
  const ultimoToque = useRef(0)

  const curtir = () => {
    if (!curtido) {
      setBatendo(false)
      requestAnimationFrame(() => setBatendo(true))
    }
    setCurtido((c) => !c)
  }

  const aoTocar = () => {
    const agora = Date.now()
    if (agora - ultimoToque.current < 320 && !curtido) curtir()
    ultimoToque.current = agora
  }

  return (
    <article className="relative h-full shrink-0 snap-start overflow-hidden">
      <img src={post.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,rgba(0,0,0,0)_26%,rgba(0,0,0,0)_44%,rgba(0,0,0,.82)_100%)]" />

      <button onClick={aoTocar} aria-label="Reproduzir vídeo" className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white/20 backdrop-blur-[3px]">
          <Play />
        </span>
      </button>

      {batendo && (
        <span className="coracao-bate pointer-events-none absolute left-1/2 top-1/2 opacity-0">
          <Coracao tamanho={96} cor="#fff" />
        </span>
      )}

      <div className="absolute bottom-[150px] right-2.5 z-10 flex flex-col items-center gap-[18px] drop-shadow-[0_1px_3px_rgba(0,0,0,.45)]">
        <div className="relative mb-1.5">
          <img src={post.foto} alt="" className="h-[46px] w-[46px] rounded-full border-2 border-white object-cover" />
          <span className="absolute -bottom-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-[1.5px] border-white bg-ambar">
            <Mais tamanho={12} cor="#1C1C1A" grossura={3} />
          </span>
        </div>

        <button onClick={curtir} aria-label="Curtir" className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1">
          <Coracao tamanho={28} cor={curtido ? '#E8534A' : '#fff'} />
          <span className="text-[11.5px] font-semibold text-white">{post.curtidas}</span>
        </button>

        <button aria-label="Respostas" className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1">
          <Balao tamanho={27} />
          <span className="text-[11.5px] font-semibold text-white">{post.respostas}</span>
        </button>

        <button aria-label="Salvar" className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1">
          <Marcador />
          <span className="text-[11.5px] font-semibold text-white">{post.salvos}</span>
        </button>

        <button aria-label="Compartilhar" className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1">
          <Compartilhar />
          <span className="text-[11.5px] font-semibold text-white">{post.compartilhamentos}</span>
        </button>

        {post.capa && (
          <span className="disco-gira block h-10 w-10 overflow-hidden rounded-full border-[5px] border-[rgba(30,30,28,.9)]">
            <img src={post.capa} alt="" className="h-full w-full object-cover" />
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-16 z-[5] flex flex-col gap-2.5 px-3.5 pb-4">
        {post.verificado && (
          <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-selo/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <Selo tamanho={13} /> Profissional verificado
          </span>
        )}

        {post.ancora && (
          <div className="flex items-center gap-2.5 rounded-[10px] bg-white/95 p-[7px]">
            <img src={post.ancora.img} alt="" className="h-11 w-11 shrink-0 rounded-md object-cover" />
            <span className="flex-1 truncate text-[12.5px] font-semibold text-grafite">{post.ancora.nome}</span>
            <button
              onClick={() => aoAbrirAncora(post.ancora!.tipo)}
              className="min-h-10 rounded-md bg-ambar px-3.5 text-xs font-bold text-grafite"
            >
              {post.ancora.acao}
            </button>
          </div>
        )}

        <div className="flex items-center gap-1.5 text-[15px] font-bold text-white">
          @{post.autor}
          {post.verificado && <Selo tamanho={15} />}
        </div>

        <p className="m-0 text-[13.5px] leading-snug text-white/90">
          {post.texto.slice(0, 96)}
          <span className="text-white/60">… mais</span>
        </p>

        {post.musica && (
          <div className="flex items-center gap-2 text-xs text-white/90">
            <Nota />
            <span>{post.musica}</span>
          </div>
        )}
      </div>
    </article>
  )
}
