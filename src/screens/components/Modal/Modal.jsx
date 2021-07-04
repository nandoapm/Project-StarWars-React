import { FaWindowClose } from 'react-icons/fa'
import './styles.scss';

export default function Modal({ handleClose, show, children }) {
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <div className="modal-title">
                <h1>Luke Skywalker</h1>
                <button type="button" onClick={handleClose}>
                    <FaWindowClose />
                </button>    
            </div>
          </section>
        </div>
      );
}

