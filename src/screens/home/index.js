import { useAppContext } from '../../providers/AppContext';
import { useState } from "react";
import './styles.scss';
import Modal from '../components/Modal/Modal';

export default function Index() {
  const { users } = useAppContext()
  const [show, setShow] = useState(false)
  const [starships, setStarships] = useState([])
  
  const showModal = (starships) => {
    console.log(starships)
    setStarships(starships)
    setShow(true);
  };

  const hideModal = () => {
    console.log('hide')
    setShow(false);
  };

  return (
    <>
      <main className="content-container">
        <section className="card-body">
          <div className="card-content">
            {users.map((person, i) => 
              <div key={i}>
                <img src="/images/img.png" />
                <button type="button" onClick={showModal(person.starships)}>{person.name}</button>
              </div>
              )}
          </div>
        </section>
        <Modal show={show} handleClose={hideModal} />
      </main>
    </>
  )
}