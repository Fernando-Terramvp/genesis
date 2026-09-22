import { useState } from 'react'
import type { Audiencia } from '../types'
import { Check, Camera, Trofeu, Duvida } from './Icons'

interface Props {
  aberta: boolean
  aoFechar: () => void
  aoAvisar: (texto: string) => void
}

const tipos = ['Musculação', 'Corrida', 'Luta', 'Funcional', 'Mobilidade']
const duracoes = ['20 min', '40 min', '1 h']
const sensacoes = ['Difícil', 'Na medida', 'Tranquilo']

const audiencias: { id: Audiencia; titulo: string; detalhe: string }[] = [
  { id: 'turma', titulo: 'Minha turma', detalhe: '12 pessoas que treinam com você' },
  { id: 'seguidores', titulo: 'Seguidores', detalhe: 'Quem acompanha seu perfil' },
  { id: 'publico', titulo: 'Público', detalhe: 'Qualquer pessoa no Para você' },
]

export default function ComposeSheet({ aberta, aoFechar, aoAvisar }: Props) {
  const [passo, setPasso] = useState<'menu' | 'treino'>('menu')
  const [tipo, setTipo] = useState('Musculação')
  const [duracao, setDuracao] = useState('40 min')
  const [sensacao, setSensacao] = useState('Na medida')
  const [audiencia, setAudiencia] = useState<Audiencia>('turma')

  const fechar = () => {
    aoFechar()
    setTimeout(() => setPasso('menu'), 260)
  }

  const chip = (ativo: boolean) =>
    `min-h-[38px] rounded-full px-3.5 text-[12.5px] ${ativo ? 'bg-grafite font-semibold text-white' : 'bg-cal font-medium text-tinta'}`

  return (
    <>
      <div
        onClick={fechar}
        className={`absolute inset-0 z-30 bg-[rgba(20,20,18,.42)] transition-opacity ${aberta ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <div
        className={`absolute inset-x-0 bottom-0 z-40 max-h-[88%] overflow-y-auto rounded-t-[22px] bg-papel pb-6 pt-2.5 transition-transform duration-[260ms] ${
          aberta ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mx-auto mb-3.5 mt-1.5 h-1 w-[38px] rounded-sm bg-regua" />

        {passo === 'menu' ? (
          <>
            <button onClick={() => setPasso('treino')} className="flex min-h-14 w-full items-center gap-3.5 border-b border-[#F3F3EF] px-5 py-4 text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cal">
                <Check grossura={1.8} />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-semibold">Registrar treino</span>
                <span className="mt-0.5 block text-xs text-pedra">Dois toques. Vira post sozinho.</span>
              </span>
            </button>

            {[
              [<Camera key="c" />, 'Publicar foto ou vídeo', 'Do jeito que você quiser contar.', 'Protótipo: publicação de mídia não implementada.'],
              [<Trofeu key="t" />, 'Compartilhar conquista', 'Marcos da sua trilha de 12 semanas.', 'Protótipo: conquistas são geradas pela trilha.'],
              [<Duvida key="d" />, 'Fazer uma pergunta', 'Quem responde tem registro conferido.', 'Protótipo: perguntas vão para profissionais verificados.'],
            ].map(([icone, titulo, detalhe, aviso]) => (
              <button
                key={titulo as string}
                onClick={() => {
                  fechar()
                  aoAvisar(aviso as string)
                }}
                className="flex min-h-14 w-full items-center gap-3.5 border-b border-[#F3F3EF] px-5 py-4 text-left last:border-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cal">{icone as React.ReactNode}</span>
                <span className="flex-1">
                  <span className="block text-[15px] font-semibold">{titulo as string}</span>
                  <span className="mt-0.5 block text-xs text-pedra">{detalhe as string}</span>
                </span>
              </button>
            ))}
          </>
        ) : (
          <div className="px-5">
            <h3 className="m-0 mb-1 font-serif text-[23px] font-normal">Registrar treino</h3>
            <p className="m-0 text-[13px] text-pedra">Semana 3 · terça-feira</p>

            <div className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-pedra">Tipo</div>
            <div className="flex flex-wrap gap-2">
              {tipos.map((t) => (
                <button key={t} onClick={() => setTipo(t)} className={chip(tipo === t)}>
                  {t}
                </button>
              ))}
            </div>

            <div className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-pedra">Duração</div>
            <div className="flex flex-wrap gap-2">
              {duracoes.map((d) => (
                <button key={d} onClick={() => setDuracao(d)} className={chip(duracao === d)}>
                  {d}
                </button>
              ))}
            </div>

            <div className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-pedra">Como foi</div>
            <div className="flex flex-wrap gap-2">
              {sensacoes.map((s) => (
                <button key={s} onClick={() => setSensacao(s)} className={chip(sensacao === s)}>
                  {s}
                </button>
              ))}
            </div>

            <div className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-pedra">Quem vê</div>
            <div className="flex flex-col gap-2">
              {audiencias.map((a) => {
                const ativo = audiencia === a.id
                return (
                  <button
                    key={a.id}
                    onClick={() => setAudiencia(a.id)}
                    className={`flex min-h-[52px] w-full items-center gap-3 rounded-[13px] text-left ${
                      ativo ? 'border-2 border-grafite p-3' : 'border border-regua p-3.5'
                    }`}
                  >
                    <span
                      className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full ${
                        ativo ? 'bg-ambar' : 'border-[1.5px] border-[#D5D5CE]'
                      }`}
                    >
                      {ativo && <Check tamanho={12} grossura={3.4} />}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{a.titulo}</span>
                      <span className="mt-px block text-[11.5px] text-pedra">{a.detalhe}</span>
                    </span>
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => {
                fechar()
                aoAvisar(`${tipo} de ${duracao} registrado — publicado ${audiencia === 'turma' ? 'só para a sua turma' : audiencia === 'seguidores' ? 'para seus seguidores' : 'para todo mundo'}.`)
              }}
              className="mt-5 min-h-[52px] w-full rounded-[26px] bg-grafite text-[15px] font-semibold text-white"
            >
              Registrar e publicar
            </button>

            <p className="px-2 pt-3.5 text-center text-[11px] leading-relaxed text-pedra">
              Você pode mudar quem vê depois. O padrão é sempre a turma.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
