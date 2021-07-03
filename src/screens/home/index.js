import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.scss';

export default function Index() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getListUsers()
  }, [search, page])

  const getListUsers = () => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`)
    .then(res => {
      const userList = res.data.results
      console.log(res.data)
      const searchUsers = userList.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
      setUsers(searchUsers)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <main className="contentContainer">
        <section className="cardContent">
          <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
            <ul>
              {users.map((person, i) => 
                <li key={i}>{person.name}</li>
              )}
            </ul>
        </section>
        <section>
          <div>
          <button onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button onClick={() => setPage(page + 1)}>
          Proximo
        </button>
          </div>
        
        </section>
      </main>
    </>
  )
}