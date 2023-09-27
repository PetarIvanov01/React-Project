import { createContext, useContext, useEffect, useState } from 'react'
import { getCatalog, getDataForHome } from '../api/services/goalsApi';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const [goals, setGoalsData] = useState([]);
    const [hasGoals, setIfGoals] = useState(false);


    function setParams(items) {

        setGoalsData(items.results);
        setIfGoals(true)
        
    }

    useEffect(() => {

        if (view === 'home') {
            getDataForHome().then(({ items }) => {
                setParams(items);
            })
        }
        else {
            getCatalog().then(({ items }) => {
                setParams(items);
            })
        }

    }, [view])


    return (
        <HomeContext.Provider value={{ goals, setGoalsData, hasGoals }}>

            {children}
        </HomeContext.Provider>
    )
}

export const useCatalogGoals = () => {
    const context = useContext(HomeContext)

    return context;
}