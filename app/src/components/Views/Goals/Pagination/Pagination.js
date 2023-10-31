import { PaginationStyle } from "../../../../styles/ViewsStyles/GoalsStyle/Pagination.style";
import { useCatalogGoals } from "../../../../contexts/catalog";
import { useNavigate } from "react-router-dom";

export default function Pagination() {

    const navigate = useNavigate();
    const { pages } = useCatalogGoals();

    const onClickNext = (e) => {
        e.preventDefault();

        const { page } = pages.next;
        navigate(`/goals?page=${page}`);
    }

    const onClickPrev = (e) => {
        e.preventDefault();

        const { page } = pages.previous;
        navigate(`/goals?page=${page}`);
    }

    return (
        <PaginationStyle>
            <a style={{ pointerEvents: (pages?.previous === undefined ? 'none' : '') }} onClick={onClickPrev} href="#">
                <svg className="btn btn--prev" height="66" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                    <path d="M0-.5h24v24H0z" fill="none" />
                </svg>
            </a>

            <a style={{ pointerEvents: (pages?.next === undefined ? 'none' : '') }} onClick={onClickNext} href="#">
                <svg className="btn btn--next" height="66" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                    <path d="M0-.25h24v24H0z" fill="none" />
                </svg>
            </a>
        </PaginationStyle >
    )

}


