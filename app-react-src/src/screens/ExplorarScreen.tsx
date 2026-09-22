import { useState } from 'react'
import { profissionais } from '../data/profissionais'
import { Lupa, Selo } from '../components/Icons'

const filtros = ['Até 3 km', 'Até R$ 250', 'Atende iniciante', 'Online']

export default function ExplorarScreen() {
  const [filtro, setFiltro] = useState('Até 3 km')

  return (
    <section className="flex h-full flex-col bg-papel">
      <header className="flex shrink-0 items-center border-b border-[#F0F0EC] px-4 pb-3 pt-3.5">
        <h1 className="m-0 text-lg font-semibold">Perto de mim</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-4 mt-3 flex items-center gap-2.5 rounded-2xl bg-cal px-3.5 py-3">
          <Lupa tamanho={17} cor="#6E6E68" />
          <input
            aria-label="Buscar profissionais"
            defaultValue="quero começar e nunca treinei"
            className="min-w-0 flex-1 bg-transparent text-sm text-grafite outline-none"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto px-4 py-3">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`min-h-[38px] whitespace-nowrap rounded-full px-3.5 text-[12.5px] ${
                filtro === f ? 'bg-grafite font-semibold text-white' : 'bg-cal font-medium text-tinta'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* mapa desenhado à mão: sem API, sem chave, sem custo */}
        <div className="relative mx-4 overflow-hidden rounded-2xl border border-regua bg-cal">
          <svg viewBox="0 0 358 168" className="block w-full" role="img" aria-label="Mapa do bairro com profissionais verificados por perto">
            <rect width="358" height="168" fill="#F4F4F1" />
            <path d="M0 46H358M0 108H358M78 0V168M196 0V168M292 0V168" stroke="#E3E3DE" strokeWidth={2} />
            <path d="M0 136C96 124 176 148 358 132" stroke="#DCE5E1" strokeWidth={11} fill="none" />
            <path d="M78 46 196 108" stroke="#E9E9E4" strokeWidth={6} fill="none" />
            <circle cx="132" cy="74" r="12" fill="#1C1C1A" />
            <circle cx="132" cy="74" r="4.2" fill="#fff" />
            {[
              [244, 58],
              [206, 124],
              [62, 128],
              [304, 96],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="9.5" fill="#1F7A5A" />
                <circle cx={x} cy={y} r="3.6" fill="#fff" />
              </g>
            ))}
          </svg>
          <div className="absolute bottom-2.5 left-3 rounded-full border border-regua bg-white px-3 py-1.5 text-[11.5px] font-semibold">
            Tijuca · 14 verificados
          </div>
        </div>

        <div className="px-4">
          <h2 className="mb-1 mt-4 font-serif text-2xl leading-tight">Profissionais verificados</h2>
          <p className="mb-3.5 text-[13.5px] leading-snug text-pedra">Preço na mesa antes da conversa.</p>
        </div>

        {profissionais.map((p) => (
          <article key={p.nome} className="mx-4 mb-3 flex gap-3 rounded-2xl border border-regua p-3.5">
            <img src={p.img} alt="" className="h-[52px] w-[52px] shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-sm font-semibold">
                {p.nome}
                <Selo />
              </div>
              <div className="mt-0.5 text-[11.5px] text-pedra">{p.credencial}</div>
              <div className="mt-1.5 text-[15px] font-bold">
                {p.preco} <small className="ml-1 text-xs font-normal text-pedra">{p.unidade}</small>
              </div>
              <div className="mt-2 rounded-lg bg-cal px-2.5 py-2 text-[11.5px] leading-snug text-tinta">{p.faixa}</div>
            </div>
          </article>
        ))}

        <p className="px-5 pb-5 pt-1 text-center text-[11px] leading-relaxed text-pedra">
          Perfis ilustrativos. Protótipo acadêmico, sem serviço real.
        </p>
      </div>
    </section>
  )
}
