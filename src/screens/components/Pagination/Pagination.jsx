import { useAppContext } from '../../../providers/AppContext';
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import './styles.scss';

export default function Pagination() {
   const { page, setPage } = useAppContext()

   return (      
      <div className="card-pagination">
         <button disabled={page === 1 && true} className="main-button" onClick={() => setPage(page - 1)}><FaChevronLeft /></button>
         <button disabled={page === 9 && true} className="main-button" onClick={() => setPage(page + 1)}><FaChevronRight /></button>
      </div>
   )
}