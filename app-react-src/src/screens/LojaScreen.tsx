import { useState } from 'react'
import { kits, produtos } from '../data/produtos'
import { Lupa } from '../components/Icons'

const categorias = ['Kits', 'Equipamento', 'Suplemento', 'Cursos', 'Consultorias']

export default function LojaScreen() {
  const [categoria, setCategoria] = useState('Kits')

  return (
    <section className="flex h-full flex-col bg-papel">
      <header className="flex shrink-0 items-center gap-2.5 border-b border-[#F0F0EC] px-4 pb-3 pt-3.5">
        <h1 className="m-0 flex-1 text-lg font-semibold">Loja</h1>
        <span className="rounded-full bg-cal px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-pedra">comissão</span>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-4 mt-3 flex items-center gap-2.5 rounded-2xl bg-cal px-3.5 py-3">
          <Lupa tamanho={17} cor="#6E6E68" />
          <input
            aria-label="Buscar na loja"
            placeholder="O que você precisa para começar?"
            className="min-w-0 flex-1 bg-transparent text-sm text-grafite outline-none placeholder:text-pedra"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto px-4 py-3">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`min-h-[38px] whitespace-nowrap rounded-full px-3.5 text-[12.5px] ${
                categoria === c ? 'bg-grafite font-semibold text-white' : 'bg-cal font-medium text-tinta'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="px-4">
          <h2 className="mb-1 mt-3 font-serif text-2xl leading-tight">Kits por necessidade</h2>
          <p className="mb-3.5 text-[13.5px] leading-snug text-pedra">
            Montados por profissional verificado. Sem vitrine infinita.
          </p>

          {kits.map((k) => (
            <article key={k.nome} className="mb-3.5 overflow-hidden rounded-2xl border border-regua">
              <img src={k.img} alt="" className="block h-[150px] w-full object-cover" />
              <div className="flex items-end gap-3 p-3.5">
                <div className="flex-1">
                  <h3 className="m-0 mb-1 text-base font-semibold">{k.nome}</h3>
                  <div className="text-[11.5px] text-pedra">{k.descricao}</div>
                  <div className="mt-1.5 text-[17px] font-bold">{k.preco}</div>
                </div>
                {k.parceria && (
                  <span className="rounded-full bg-cal px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-pedra">parceria</span>
                )}
              </div>
            </article>
          ))}

          <h2 className="mb-1 mt-5 font-serif text-2xl leading-tight">Mais vendidos</h2>
          <p className="mb-3.5 text-[13.5px] leading-snug text-pedra">Todo item com parceria comercial é marcado.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-4 pb-6">
          {produtos.map((p) => (
            <article key={p.nome} className="overflow-hidden rounded-2xl border border-regua">
              <img src={p.img} alt="" className="block h-[120px] w-full object-cover" />
              <div className="p-2.5">
                <h4 className="m-0 mb-1.5 h-[34px] overflow-hidden text-[12.5px] font-medium leading-snug">{p.nome}</h4>
                <div className="text-[14.5px] font-bold">{p.preco}</div>
                <div className="mt-1 text-[11px] text-pedra">★ {p.nota}</div>
                {p.parceria && (
                  <span className="mt-2 inline-block rounded-full bg-cal px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-pedra">
                    parceria
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
