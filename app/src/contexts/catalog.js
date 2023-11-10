import { createContext, useContext, useEffect, useState } from 'react'
import { getCatalog, getDataForHome } from '../api/services/goalsApi';
import useQuery from '../hooks/useQuery';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const [goals, setGoalsData] = useState([]);
    const [pages, setPages] = useState({});
    const { endpoint } = useQuery();
    
    function setParams(items) {
        setPages(items);
        setGoalsData(items.results);
    }

    useEffect(() => {
        if (view === 'home') {
            getDataForHome().then(({ items }) => {
                setParams(items);
            }).catch((err) => console.log(err))
        }
        else {
            getCatalog(endpoint).then(({ items }) => {
                setParams(items);
            }).catch((err) => console.log(err))

        }

    }, [view, endpoint])


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