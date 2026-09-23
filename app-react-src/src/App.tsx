import { useEffect, useState } from 'react'
import type { AbaFeed, Tela } from './types'
import PhoneFrame from './components/PhoneFrame'
import BottomNav from './components/BottomNav'
import ComposeSheet from './components/ComposeSheet'
import TimelineScreen from './screens/TimelineScreen'
import ImmersiveScreen from './screens/ImmersiveScreen'
import LojaScreen from './screens/LojaScreen'
import ExplorarScreen from './screens/ExplorarScreen'
import PerfilScreen from './screens/PerfilScreen'
import MensagensScreen from './screens/MensagensScreen'

export default function App() {
  const [tela, setTela] = useState<Tela>('feed')
  const [folhaAberta, setFolhaAberta] = useState(false)
  const [videoAberto, setVideoAberto] = useState<string | null>(null)
  const [aviso, setAviso] = useState<string | null>(null)

  useEffect(() => {
    if (!aviso) return
    const t = setTimeout(() => setAviso(null), 2600)
    return () => clearTimeout(t)
  }, [aviso])

  /** As abas do topo da timeline levam às telas correspondentes. */
  const trocarAba = (a: AbaFeed) =>
    setTela(a === 'seguindo' ? 'seguindo' : a === 'loja' ? 'loja' : a === 'perto' ? 'explorar' : 'feed')

  const abrirAncora = (tipo: 'produto' | 'servico') => {
    setVideoAberto(null)
    setTela(tipo === 'produto' ? 'loja' : 'explorar')
  }

  return (
    <PhoneFrame>
      <div className="relative flex-1 overflow-hidden">
        {(tela === 'feed' || tela === 'seguindo') && (
          <TimelineScreen
            aba={tela === 'seguindo' ? 'seguindo' : 'foryou'}
            aoTrocarAba={trocarAba}
            aoAbrirVideo={setVideoAberto}
            aoAbrirAncora={abrirAncora}
            aoPublicar={() => setFolhaAberta(true)}
          />
        )}
        {tela === 'loja' && <LojaScreen />}
        {tela === 'explorar' && <ExplorarScreen />}
        {tela === 'mensagens' && <MensagensScreen />}
        {tela === 'perfil' && <PerfilScreen />}

        {videoAberto && (
          <ImmersiveScreen idInicial={videoAberto} aoFechar={() => setVideoAberto(null)} aoAbrirAncora={abrirAncora} />
        )}
      </div>

      <BottomNav ativa={tela} aoNavegar={setTela} aoPublicar={() => setFolhaAberta(true)} />

      <ComposeSheet aberta={folhaAberta} aoFechar={() => setFolhaAberta(false)} aoAvisar={setAviso} />

      <div
        className={`pointer-events-none absolute bottom-[86px] left-1/2 z-50 max-w-[86%] rounded-3xl bg-grafite px-4 py-3 text-center text-[13px] font-medium text-white transition-all ${
          aviso ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `translateX(-50%) translateY(${aviso ? 0 : 20}px)` }}
      >
        {aviso}
      </div>
    </PhoneFrame>
  )
}
