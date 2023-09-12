import { createContext, useContext, useEffect, useState } from 'react'
import { getDetails, getCatalog, getDataForHome } from '../api/services/goalsApi';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const [goals, setGoalsData] = useState([]);

    useEffect(() => {

        if (view === 'home') {
            getDataForHome().then(({ items }) => {
                setGoalsData(items.results);
            })
        }
        else {
            getCatalog().then(({ items }) => {
                setGoalsData(items.results);
            })
        }

    }, [view])


    return (
        <HomeContext.Provider value={{ goals, setGoalsData }}>

            {children}
        </HomeContext.Provider>
    )
}

export const useCatalogGoals = () => {
    const context = useContext(HomeContext)

    return context;
}