import next from '/imgs/svg/next.svg';
import prev from '/imgs/svg/prev.svg';
import { PaginationStyle } from "../../styles/ViewsStyles/FeaturesStyle/Pagination.style";
import { useCatalogGoals } from "../../contexts/catalog";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

import useQuery from "../../hooks/useQuery";
import func from "../../util/paginationEndpoints";

export default function Pagination() {

    const navigate = useNavigate();
    const { pages } = useCatalogGoals();
    const { endpoint, queriesObj } = useQuery();

    const pageEndpointFunc = func.bind(null, queriesObj, endpoint);

    const onClickPaginate = (e, { page }) => {
        e.preventDefault();
        const pageEndpoint = pageEndpointFunc(page);

        navigate(pageEndpoint);
    }
    return (
        <PaginationStyle>
            <Link style={{ pointerEvents: (pages?.previous === undefined ? 'none' : '') }} onClick={(e) => onClickPaginate(e, pages.previous)}>
                <img src={prev} alt="prev" />
            </Link>

            <Link style={{ pointerEvents: (pages?.next === undefined ? 'none' : '') }} onClick={(e) => onClickPaginate(e, pages.next)}>
                <img src={next} alt="next" />
            </Link>
        </PaginationStyle >
    )

}
