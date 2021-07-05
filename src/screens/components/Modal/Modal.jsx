import axios from "axios";
import { useEffect, useState } from "react";
import { FaWindowClose } from 'react-icons/fa'
import { useAppContext } from "../../../providers/AppContext";
import './styles.scss';

export default function Modal({ handleClose, show, children, starships, name }) {
    const [starshipsList, setStarshipsList] = useState([])
    const { loading } = useAppContext()

    useEffect(() => {
        setStarshipsList([])
        for(let i = 0; i < starships.length; i = i + 1 ) {
            axios.get(`${starships[i]}`)
                .then(res => {
                    console.log(res.data)
                    const body = {
                        starship: res.data,
                        number: i
                    }
                    setStarshipsList(oldArray => [...oldArray, body]);
                })
                .catch(err => {
                console.log(err)
                })
        }
    }, [starships])
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <div className="modal-title">
                <h1>{name}</h1>
                <button type="button" onClick={handleClose}>
                    <FaWindowClose />
                </button>    
            </div>
            <div className="modal-body">
                {starshipsList.length <= 0 ? 
                    <div className="list-starship">
                        <span><strong>Personagem não possue Nave Estelar</strong></span>
                    </div>
                    :
                    starshipsList.map((e, i) =>
                        <div key={i} className="list-starship"> 
                            <span><strong>Nome:&nbsp;&nbsp;</strong>{e.starship.name}</span>
                            <span><strong>Modelo:&nbsp;&nbsp;</strong>{e.starship.model}</span>
                            <span><strong>Nave Estelar:&nbsp;&nbsp;</strong>{e.starship.starship_class}</span>
                            <span><strong>Tripulantes:&nbsp;&nbsp;</strong>{e.starship.passengers}</span>
                            <span><strong>Custo em Créditos:&nbsp;&nbsp;</strong>{e.starship.cost_in_credits}</span>
                            <span><strong>Consumíveis:&nbsp;&nbsp;</strong>{e.starship.consumables}</span>
                            <span><strong>Velocidade Atmosférica:&nbsp;&nbsp;</strong>{e.starship.max_atmosphering_speed}</span>
                            <span><strong>Equipe Técnica:&nbsp;&nbsp;</strong>{e.starship.crew}</span>
                            <span><strong>Capacidade:&nbsp;&nbsp;</strong>{e.starship.cargo_capacity}</span>
                            <span><strong>MGLT:&nbsp;&nbsp;</strong>{e.starship.MGLT}</span>
                            {/* <span><strong>Filmes</strong>{e.starship.filmes}</span> */}
                            <span><strong>Fabricante:&nbsp;&nbsp;</strong>{e.starship.manufacturer}</span>
                        </div>
                )}
            </div>
          </section>
        </div>
      );
}

