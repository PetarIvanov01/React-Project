import { Link } from "react-router-dom"
import { cardDescCutter } from "../../util/cutter";
import { CardStyle } from "../../styles/ViewsStyles/HomeStyle/CardHomeStyle.style";

export default function Card({
    avatarImg,
    category,
    username,
    userId,
    followers,
    goals
}) {
    
    return (
        <CardStyle >
            <div className="profile">
                <img
                    className="avatar"
                    src={avatarImg.value}
                    alt={avatarImg.label}
                />
                <p>{username || "Full Name"}</p>
            </div>
            <div className="categories">
                <p>Categories</p>
                <ul>
                    <li>
                        <div className="category-li">
                            <p>{category}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="followers">
                <p>Followers: {followers.length}</p>
            </div>
            <div className="posts">

                {goals?.length ?
                    goals.map(e => <p key={e._id}>{e.title}: <span className="short-desc">{cardDescCutter(e.description)}</span></p>)
                    :
                    <h4>Ops, no content available!</h4>}
            </div>
            <Link to={`/profile/${userId || "userID"}`}>
                Show Details
            </Link>
        </CardStyle>
    )
}