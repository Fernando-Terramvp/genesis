import { useEffect, useState } from 'react'
import type { AbaFeed, Tela } from './types'
import PhoneFrame from './components/PhoneFrame'
import BottomNav from './components/BottomNav'
import ComposeSheet from './components/ComposeSheet'
import FeedScreen from './screens/FeedScreen'
import SeguindoScreen from './screens/SeguindoScreen'
import LojaScreen from './screens/LojaScreen'
import ExplorarScreen from './screens/ExplorarScreen'
import PerfilScreen from './screens/PerfilScreen'
import MensagensScreen from './screens/MensagensScreen'

export default function App() {
  const [tela, setTela] = useState<Tela>('feed')
  const [folhaAberta, setFolhaAberta] = useState(false)
  const [aviso, setAviso] = useState<string | null>(null)

  useEffect(() => {
    if (!aviso) return
    const t = setTimeout(() => setAviso(null), 2600)
    return () => clearTimeout(t)
  }, [aviso])

  /** As abas do topo do feed levam às telas correspondentes. */
  const trocarAba = (a: AbaFeed) =>
    setTela(a === 'seguindo' ? 'seguindo' : a === 'loja' ? 'loja' : a === 'perto' ? 'explorar' : 'feed')

  return (
    <PhoneFrame>
      <div className="relative flex-1 overflow-hidden">
        {tela === 'feed' && (
          <FeedScreen
            aoTrocarAba={trocarAba}
            aoAbrirAncora={(tipo) => setTela(tipo === 'produto' ? 'loja' : 'explorar')}
          />
        )}
        {tela === 'seguindo' && <SeguindoScreen aoVoltar={() => setTela('feed')} />}
        {tela === 'loja' && <LojaScreen />}
        {tela === 'explorar' && <ExplorarScreen />}
        {tela === 'mensagens' && <MensagensScreen />}
        {tela === 'perfil' && <PerfilScreen />}
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
