import { createContext, useContext, useEffect, useState } from "react";
import { API, CHARACTERS } from '../API';

export const AppProvider = createContext({});

export default function AppContext(props) {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getImages()
    }, [search, page])

    const getImages = async () => {
        await CHARACTERS.get(`https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json`)
            .then(res => {
                getListUsers(res.data)
            })
            .catch(err => {
            console.log(err)
            })
    }

    const getListUsers = async (characters) => {
        setLoading(true)
        await API.get(`https://swapi.dev/api/people/?page=${page}`)
        .then(res => {
            const userList = []
            res.data.results.forEach(element => {
                const body = {
                    name: element.name,
                    starships: element.starships,
                    image: characters.map(img => element.name === img.name && img.image).filter((n) => { return n.length > 0})
                }
                userList.push(body)
            });
            const searchUsers = userList.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
            setUsers(searchUsers)
            setTimeout(() => { 
                setLoading(false) 
            }, 2000);
        })
        .catch(err => {
          console.log(err)
        })
    }
      
   return (
        <AppProvider.Provider value={{
            users,
            page,
            search,
            loading,
            setPage,
            setSearch,
            setLoading
        }}>
            {props.children}
        </AppProvider.Provider>
   );
}

export const useAppContext = () => useContext(AppProvider);
