import { createContext, useContext, useEffect, useState } from 'react'
import { getCatalog, getDataForHome } from '../api/services/goalsApi';
import useQuery from '../hooks/useQuery';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const [goals, setGoalsData] = useState([]);
    const [pages, setPages] = useState({});
    const { query, data } = useQuery();

    function setParams(items) {
        setPages(items)
        setGoalsData(items.results);
    }

    useEffect(() => {
        if (view === 'home') {
            getDataForHome().then(({ items }) => {
                setParams(items);
            }).catch((err) => console.log(err))
        }
        else {
            getCatalog(data, query).then(({ items }) => {
                setParams(items);
            }).catch((err) => console.log(err))

        }

    }, [view, query, data])


    return (
        <HomeContext.Provider value={{ goals, pages }}>

            {children}
        </HomeContext.Provider>
    )
}

export const useCatalogGoals = () => {
    const context = useContext(HomeContext)

    return context;
}