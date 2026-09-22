import { useState } from 'react'
import { foto } from '../data/posts'
import { semanas } from '../data/profissionais'

type AbaPerfil = 'posts' | 'salvos' | 'progresso'

const grade = [
  foto('photo-1534438327276-14e5300c3a48', 300),
  foto('photo-1571019613454-1cb2f99b2d8b', 300),
  foto('photo-1461896836934-ffe607ba8211', 300),
  foto('photo-1544367567-0f2fcb009e0b', 300),
  foto('photo-1490645935967-10de6ba17061', 300),
  foto('photo-1546483875-ad9014c88eba', 300),
]

export default function PerfilScreen() {
  const [aba, setAba] = useState<AbaPerfil>('posts')

  const estilo = (e: string) =>
    e === 'feita'
      ? 'bg-ambar text-grafite'
      : e === 'atual'
        ? 'border-[2.5px] border-ambar bg-white text-grafite'
        : 'bg-cal text-pedra'

  return (
    <section className="flex h-full flex-col bg-papel">
      <div className="flex-1 overflow-y-auto">
        <div className="h-[104px] bg-[linear-gradient(120deg,#22322B,#1C1C1A)]" />

        <div className="-mt-9 px-4">
          <img src={foto('photo-1552674605-db6ffd4facb5', 200)} alt="" className="h-[76px] w-[76px] rounded-full border-[3px] border-papel object-cover" />

          <div className="mt-2.5 flex items-start gap-2.5">
            <div className="flex-1">
              <div className="text-[19px] font-bold">Marina R.</div>
              <div className="text-[11.5px] text-pedra">@marina.r · turma da manhã · Tijuca</div>
            </div>
            <span className="mt-1 rounded-full bg-ambarfraco px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-ambartexto">
              Semana 3
            </span>
          </div>

          <p className="mt-2.5 text-[13.5px] leading-normal text-tinta">
            Recomeçando pela terceira vez — e desta vez com quem entende. Sem pressa.
          </p>

          <div className="mb-1 mt-4 flex gap-2.5">
            {[
              ['3', 'semanas'],
              ['9', 'treinos'],
              ['12', 'na turma'],
            ].map(([n, r]) => (
              <div key={r} className="flex-1 rounded-xl border border-regua p-2.5 text-center">
                <b className="block font-serif text-2xl font-normal leading-none">{n}</b>
                <span className="text-[10.5px] text-pedra">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex border-b border-regua">
          {(
            [
              ['posts', 'Meus posts'],
              ['salvos', 'Salvos'],
              ['progresso', 'Progresso'],
            ] as [AbaPerfil, string][]
          ).map(([id, rotulo]) => (
            <button
              key={id}
              onClick={() => setAba(id)}
              className={`min-h-11 flex-1 py-3 text-center text-[13px] ${
                aba === id ? 'font-semibold text-grafite shadow-[inset_0_-2px_0_#1C1C1A]' : 'font-medium text-pedra'
              }`}
            >
              {rotulo}
            </button>
          ))}
        </div>

        {aba === 'posts' && (
          <div className="grid grid-cols-3 gap-[3px] p-[3px]">
            {grade.map((g) => (
              <img key={g} src={g} alt="" className="block aspect-square w-full object-cover" />
            ))}
          </div>
        )}

        {aba === 'salvos' && (
          <div className="grid grid-cols-3 gap-[3px] p-[3px]">
            {grade.slice(3).map((g) => (
              <img key={g} src={g} alt="" className="block aspect-square w-full object-cover" />
            ))}
          </div>
        )}

        {aba === 'progresso' && (
          <>
            <div className="px-4">
              <h2 className="mb-1 mt-4 font-serif text-2xl leading-tight">Trilha de 12 semanas</h2>
              <p className="mb-2 text-[13.5px] leading-snug text-pedra">
                Checkpoints nas semanas 2, 6 e 12 — onde a maioria desiste.
              </p>
            </div>

            {semanas.map((s) => (
              <div key={s.n} className="flex items-center gap-3 border-b border-[#F3F3EF] px-4 py-3">
                <span className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${estilo(s.estado)}`}>
                  {s.n}
                </span>
                <div className="flex-1 text-[13.5px]">
                  <strong className={s.checkpoint ? 'font-bold' : 'font-medium'}>
                    Semana {s.n} · {s.titulo}
                  </strong>
                  <small className="mt-0.5 block text-[11.5px] text-pedra">{s.detalhe}</small>
                </div>
                {s.checkpoint && (
                  <span className="rounded-full bg-ambarfraco px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-ambartexto">
                    checkpoint
                  </span>
                )}
              </div>
            ))}

            <p className="px-5 pb-5 pt-3 text-center text-[11px] leading-relaxed text-pedra">
              Concluir as 12 semanas é a única métrica que a Gênesis persegue.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
