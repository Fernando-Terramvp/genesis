import { useEffect, useRef } from 'react'
import { posts } from '../data/posts'
import PostItem from '../components/PostItem'
import { Fechar } from '../components/Icons'

interface Props {
  idInicial: string
  aoFechar: () => void
  aoAbrirAncora: (tipo: 'produto' | 'servico') => void
}

/**
 * Tela cheia no formato TikTok, aberta ao tocar num vídeo da timeline.
 * Só entram posts de vídeo, e a rolagem começa no que foi tocado.
 */
export default function ImmersiveScreen({ idInicial, aoFechar, aoAbrirAncora }: Props) {
  const videos = posts.filter((p) => p.tipo === 'video')
  const caixa = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const i = videos.findIndex((p) => p.id === idInicial)
    if (i > 0 && caixa.current) caixa.current.scrollTop = i * caixa.current.clientHeight
  }, [idInicial, videos])

  return (
    <section className="absolute inset-0 z-30 flex flex-col bg-black">
      <button
        onClick={aoFechar}
        aria-label="Fechar vídeo"
        className="absolute left-3 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-[2px]"
      >
        <Fechar />
      </button>

      <div ref={caixa} className="h-full snap-y snap-mandatory overflow-y-auto">
        {videos.map((p) => (
          <PostItem key={p.id} post={p} aoAbrirAncora={aoAbrirAncora} />
        ))}
      </div>
    </section>
  )
}
