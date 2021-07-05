import { useAppContext } from '../../../providers/AppContext';
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import './styles.scss';

export default function Pagination() {
   const { page, setPage } = useAppContext()

   return (      
      <div className="card-pagination">
         <button disabled={page === 1 && true} className="main-button" onClick={() => setPage(page - 1)}><FaChevronLeft /></button>
         {/* <div className="group-button">
            <button onClick={() => setPage(1)}>{page}</button>
            <button onClick={() => setPage(2)}>{page + 1}</button>
            <button onClick={() => setPage(3)}>{page + 2}</button>
            <button onClick={() => setPage(4)}>{page + 3}</button>
            <button onClick={() => setPage(5)}>{page + 4}</button>
         </div> */}
         <button disabled={page === 9 && true} className="main-button" onClick={() => setPage(page + 1)}><FaChevronRight /></button>
      </div>
   )
}