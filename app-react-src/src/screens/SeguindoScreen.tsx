import { posts } from '../data/posts'
import { stories } from '../data/profissionais'
import { Marca, Selo, Coracao, Balao, Marcador } from '../components/Icons'

export default function SeguindoScreen({ aoVoltar }: { aoVoltar: () => void }) {
  return (
    <section className="flex h-full flex-col bg-papel">
      <header className="flex shrink-0 items-center gap-2.5 border-b border-[#F0F0EC] px-4 pb-3 pt-3.5">
        <span className="text-grafite">
          <Marca tamanho={26} />
        </span>
        <h1 className="m-0 flex-1 text-lg font-semibold">Seguindo</h1>
        <button onClick={aoVoltar} className="min-h-11 text-[13px] font-semibold text-pedra">
          Para você
        </button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="flex gap-3.5 overflow-x-auto border-b border-[#F0F0EC] px-4 py-3.5">
          {stories.map((s) => (
            <button key={s.nome} className="flex w-[70px] shrink-0 flex-col items-center gap-1.5">
              <span className={`h-16 w-16 rounded-full p-[2.5px] ${s.novo ? 'bg-[linear-gradient(140deg,#E8A33D,#C97B1F)]' : 'bg-regua'}`}>
                <img src={s.img} alt="" className="h-full w-full rounded-full border-[2.5px] border-papel object-cover" />
              </span>
              <span className="max-w-[70px] truncate text-[11px] text-tinta">{s.nome}</span>
            </button>
          ))}
        </div>

        {posts.slice(0, 3).map((p) => (
          <article key={p.id} className="m-4 overflow-hidden rounded-2xl border border-regua">
            <div className="flex items-center gap-2.5 px-3.5 py-3">
              <img src={p.foto} alt="" className="h-[38px] w-[38px] shrink-0 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  {p.nome}
                  {p.verificado && <Selo />}
                </div>
                <div className="text-[11.5px] text-pedra">@{p.autor} · há 3 h</div>
              </div>
            </div>

            <img src={p.img} alt="" className="block h-[230px] w-full object-cover" />

            <div className="flex gap-4 px-3.5 pb-1.5 pt-3">
              <button aria-label="Curtir">
                <Coracao tamanho={23} cor="#1C1C1A" preenchido={false} />
              </button>
              <button aria-label="Comentar">
                <Balao tamanho={23} cor="#1C1C1A" />
              </button>
              <button aria-label="Salvar" className="ml-auto">
                <Marcador tamanho={22} cor="#1C1C1A" />
              </button>
            </div>

            <p className="px-3.5 pb-3.5 text-[13.5px] leading-normal text-tinta">
              <strong className="font-semibold text-grafite">{p.nome}</strong> {p.desc}
            </p>
          </article>
        ))}

        <p className="px-5 pb-5 pt-2 text-center text-[11px] leading-relaxed text-pedra">
          Aqui você vê só quem segue e a sua turma. Protótipo — Processo Seletivo 2026.2, Consulting Club UFRJ.
        </p>
      </div>
    </section>
  )
}
