import { useAppContext } from '../../../providers/AppContext';
import './styles.scss';

export default function Header() {
    const { search, setSearch } = useAppContext()

  return (
    <>
    <header className="header">
        {/* <img src="/images/header.svg"/> */}
        <nav>
            <img src="/images/logo.png"/>
            <span>
                <input className="gate" id="move" type="text" placeholder="Busque seu personagem" value={search} onChange={(e) => setSearch(e.target.value)} /><label htmlFor="move">Busca</label>
            </span>
        </nav>
    </header>
    </>
  )
}