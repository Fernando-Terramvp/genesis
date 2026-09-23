interface IconeProps {
  tamanho?: number
  cor?: string
  className?: string
}

const base = (t: number) => ({ width: t, height: t, viewBox: '0 0 24 24', fill: 'none' })

export const Marca = ({ tamanho = 28 }: IconeProps) => (
  <svg width={tamanho} height={tamanho} viewBox="0 0 120 120" aria-hidden="true">
    <path d="M 60 12 A 48 48 0 1 1 26.1 26.1" fill="none" stroke="currentColor" strokeWidth={13} strokeLinecap="round" />
    <circle cx="60" cy="12" r="10" fill="#E8A33D" />
  </svg>
)

export const Selo = ({ tamanho = 14 }: IconeProps) => (
  <svg width={tamanho} height={tamanho} viewBox="0 0 120 120" role="img" aria-label="Perfil verificado">
    <circle cx="60" cy="60" r="52" fill="#1F7A5A" />
    <path d="M40 61 54 75 81 46" fill="none" stroke="#fff" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Coracao = ({ tamanho = 28, cor = '#fff', preenchido = true }: IconeProps & { preenchido?: boolean }) => (
  <svg {...base(tamanho)} fill={preenchido ? cor : 'none'} stroke={cor} strokeWidth={1.8} aria-hidden="true">
    <path d="M12 20.5s-7.5-4.7-7.5-9.7A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6c0 5-7.5 9.7-7.5 9.7z" />
  </svg>
)

export const Balao = ({ tamanho = 26, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
  </svg>
)

export const Marcador = ({ tamanho = 26, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h12v18l-6-5-6 5z" />
  </svg>
)

export const Compartilhar = ({ tamanho = 26, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
    <path d="M12 16V3M7 8l5-5 5 5" />
  </svg>
)

export const Nota = ({ tamanho = 14, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" aria-hidden="true">
    <path d="M9 18V6l10-2v12" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
  </svg>
)

export const Lupa = ({ tamanho = 21, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5 21 21" />
  </svg>
)

export const Casa = ({ tamanho = 22, cor = 'currentColor' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11 12 3.5 21 11v9h-7v-6h-4v6H3z" />
  </svg>
)

export const Pessoa = ({ tamanho = 22, cor = 'currentColor' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
)

export const Mais = ({ tamanho = 22, cor = '#fff', grossura = 2.1 }: IconeProps & { grossura?: number }) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={grossura} strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Check = ({ tamanho = 20, cor = '#1C1C1A', grossura = 2.4 }: IconeProps & { grossura?: number }) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={grossura} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5 10 17.5 19 7" />
  </svg>
)

export const Play = ({ tamanho = 26 }: IconeProps) => (
  <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export const Camera = ({ tamanho = 20, cor = '#1C1C1A' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <circle cx="9" cy="10" r="1.8" />
    <path d="m4 17 5-4 4 3 3-2 4 3" />
  </svg>
)

export const Trofeu = ({ tamanho = 20, cor = '#1C1C1A' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7" />
  </svg>
)

export const Duvida = ({ tamanho = 20, cor = '#1C1C1A' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.5.2-.7.6-.7 1.1v.5" />
    <circle cx="12" cy="16.8" r=".9" fill={cor} />
  </svg>
)

export const Repost = ({ tamanho = 19, cor = '#1C1C1A' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 9V7a3 3 0 0 1 3-3h10l-3-3m3 3-3 3" />
    <path d="M20 15v2a3 3 0 0 1-3 3H7l3 3m-3-3 3-3" />
  </svg>
)

export const Pontos = ({ tamanho = 18, cor = '#9A9A92' }: IconeProps) => (
  <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill={cor} aria-hidden="true">
    <circle cx="5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="19" cy="12" r="1.7" />
  </svg>
)

export const Fechar = ({ tamanho = 22, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={2} strokeLinecap="round" aria-hidden="true">
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
)

export const Relogio = ({ tamanho = 14, cor = '#6E6E68' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const AoVivo = ({ tamanho = 21, cor = '#fff' }: IconeProps) => (
  <svg {...base(tamanho)} stroke={cor} strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="3" />
    <path d="M8 7 5 3M16 7l3-4" />
  </svg>
)
