
import { useAppContext } from '../../../providers/AppContext';
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import './styles.scss';

export default function Pagination() {
   const { page, setPage } = useAppContext()

   return (      
      <div className="card-pagination">
         <button className="main-button" onClick={() => setPage(page - 1)}><FaChevronLeft /></button>
         <div className="group-button">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
         </div>
         <button className="main-button" onClick={() => setPage(page + 1)}><FaChevronRight /></button>
      </div>
   )
}