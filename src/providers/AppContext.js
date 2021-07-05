import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppProvider = createContext({});

export default function AppContext(props) {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getListUsers()
    }, [search, page])

    const getListUsers = () => {
        setLoading(true)
        axios.get(`https://swapi.dev/api/people/?page=${page}`)
        .then(res => {
            console.log(res.data.results)
            const userList = res.data.results
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
            setUsers,
            setPage,
            setSearch,
            setLoading
        }}>
            {props.children}
        </AppProvider.Provider>
   );
}

export const useAppContext = () => useContext(AppProvider);
