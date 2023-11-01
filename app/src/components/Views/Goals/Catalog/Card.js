import { Link } from "react-router-dom"
import { CardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"
import { cardDescCutter } from "../../../../util/cutter";

export default function Card({
    avatarImg,
    category,
    username,
    userId,
    goals
}) {

    
    return (
        <CardsStyle >
            <div className="profile">
                <img
                    className="avatar"
                    src={avatarImg || "/imgs/Avatars/Avatar-2.png"}
                    alt=""
                />
                <p>{username || "Full Name"}</p>
            </div>
            <div className="categories">
                <p>Categories</p>
                <ul>
                    <li>
                        <div className="category-li">
                            <p>{category || "sport"}</p>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="posts">

                {goals?.length ?
                    goals.map(e => <p key={e._id}>{e.title}: {cardDescCutter(e.description)}</p>)
                    :
                    <h4>Ops, no content available!</h4>}
            </div>
            <Link to={`/profile/${userId || "userID"}`}>
                Show Details
            </Link>
        </CardsStyle>
    )
}