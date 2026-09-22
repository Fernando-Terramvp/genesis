import { useEffect, useState, type ReactNode } from 'react'

/**
 * No desktop o app vive dentro de uma moldura de celular de 390x844.
 * Se a janela for baixa demais, a moldura encolhe por escala em vez de
 * virar tela cheia — em largura de celular, ela ocupa a tela toda.
 */
export default function PhoneFrame({ children }: { children: ReactNode }) {
  const [escala, setEscala] = useState(1)
  const [celular, setCelular] = useState(false)

  useEffect(() => {
    const medir = () => {
      const estreito = window.innerWidth <= 460
      setCelular(estreito)
      setEscala(estreito ? 1 : Math.min(1, (window.innerHeight - 40) / 844, (window.innerWidth - 40) / 390))
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={
          celular
            ? 'relative flex h-dvh w-full flex-col overflow-hidden bg-papel'
            : 'relative flex flex-col overflow-hidden rounded-[42px] bg-papel shadow-[0_2px_6px_rgba(20,20,18,.08),0_30px_70px_rgba(20,20,18,.22)]'
        }
        style={celular ? undefined : { width: 390, height: 844, transform: `scale(${escala})` }}
      >
        {children}
      </div>
    </div>
  )
}
