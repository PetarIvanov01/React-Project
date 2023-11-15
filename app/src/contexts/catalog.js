import useQuery from '../hooks/useQuery';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCatalog, getDataForHome } from '../api/services/goalsApi';
import { SpinnerStyle } from '../util/SuspenseSpinner';

import tryCatchErr from '../util/errorChecker';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const [isLoading, setIsLoading] = useState(true);
    const [goals, setGoalsData] = useState([]);
    const [pages, setPages] = useState({});

    const { endpoint } = useQuery();

    function setParams(items) {
        setIsLoading(false);
        setPages(items);
        setGoalsData(items.results);
    }

    useEffect(() => {
        if (view === 'home') {
            getDataForHome().then(({ items }) => {
                setParams(items);
            }).catch(tryCatchErr)
        }
        else {
            getCatalog(endpoint).then(({ items }) => {
                setParams(items);
            }).catch(tryCatchErr)

        }

        return () => setIsLoading(true);

    }, [view, endpoint, setIsLoading]);

    return (
        <HomeContext.Provider value={{ goals, pages }}>
            {isLoading && <SpinnerStyle />}

            {children}
        </HomeContext.Provider>
    );
};

export const useCatalogGoals = () => {
    const context = useContext(HomeContext);

    return context;
};