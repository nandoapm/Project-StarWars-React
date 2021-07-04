import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppProvider = createContext({});

export default function AppContext(props) {
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
          const searchUsers = userList.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
          setUsers(searchUsers)
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
            setUsers,
            setPage,
            setSearch
        }}>
            {props.children}
        </AppProvider.Provider>
   );
}

export const useAppContext = () => useContext(AppProvider);
