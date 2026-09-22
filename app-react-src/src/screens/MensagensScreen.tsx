import { conversas } from '../data/conversas'
import { Marca, Selo } from '../components/Icons'

export default function MensagensScreen() {
  return (
    <section className="flex h-full flex-col bg-papel">
      <header className="flex shrink-0 items-center border-b border-[#F0F0EC] px-4 pb-3 pt-3.5">
        <h1 className="m-0 text-lg font-semibold">Mensagens</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        {conversas.map((c) => (
          <article key={c.nome} className="flex items-center gap-3 border-b border-[#F3F3EF] px-4 py-3">
            {c.sistema ? (
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cal text-grafite">
                <Marca tamanho={20} />
              </span>
            ) : (
              <img src={c.img} alt="" className="h-[38px] w-[38px] shrink-0 rounded-full object-cover" />
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-sm font-semibold">
                {c.nome}
                {c.verificado && <Selo tamanho={13} />}
              </div>
              <div className="truncate text-[12.5px] text-pedra">{c.previa}</div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-[11px] text-pedra">{c.hora}</span>
              {c.naoLida && <span className="h-2.5 w-2.5 rounded-full bg-ambar" />}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
