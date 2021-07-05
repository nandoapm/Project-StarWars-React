import { useAppContext } from '../../providers/AppContext';
import { useState } from "react";
import './styles.scss';
import Modal from '../components/Modal/Modal';
import { Loading } from '../components/Loading/Loading';

export default function Home() {
  const { users, loading, characters } = useAppContext()
  const [show, setShow] = useState(false)
  const [starships, setStarships] = useState(false)
  const [name, setName] = useState(false)
  
  const showModal = (starships, name) => {
    setStarships(starships)
    setName(name)
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
            { loading ? <Loading /> :
              users.map((person, i) => 
                
                <button key={i} type="button" onClick={e => showModal(person.starships, person.name)}>
                  { console.log(person.image[0]) }
                  <img src={person.image[0]} />
                  <span>{person.name}</span>
                </button>
              )}
          </div>
        </section>
        <Modal show={show} handleClose={hideModal} starships={starships} name={name} />
      </main>
    </>
  )
}