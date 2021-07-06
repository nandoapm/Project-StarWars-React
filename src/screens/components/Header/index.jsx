import { useAppContext } from '../../../providers/AppContext';
import './styles.scss';

export default function Header() {
    const { search, setSearch } = useAppContext()

  return (
    <>
    <header className="header">
        <nav>
          <div>
            <img src="/images/logo.png"/>
          </div>
          <span>
                <input className="gate" id="move" type="text" placeholder="Busque seu personagem" value={search} onChange={(e) => setSearch(e.target.value)} /><label htmlFor="move">Busca</label>
            </span>
            
        </nav>
    </header>
    </>
  )
}