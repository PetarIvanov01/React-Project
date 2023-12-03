import useQuery from '../hooks/useQuery';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCatalog, getDataForHome } from '../api/services/goalsApi';
import { SpinnerStyle } from '../components/SuspenseSpinner';

import useErrorBoundryAsync from '../hooks/useErrorBoundryAsync';

const HomeContext = createContext();

export default function GoalsProvider({ children, view }) {

    const throwToErrBoundry = useErrorBoundryAsync()

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
            }).catch(throwToErrBoundry)
        }
        else {
            getCatalog(endpoint).then(({ items }) => {
                setParams(items);
            }).catch(throwToErrBoundry)

        }

        return () => setIsLoading(true);

    }, [view, endpoint, setIsLoading, throwToErrBoundry]);

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