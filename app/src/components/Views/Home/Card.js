import { Link } from "react-router-dom";
import { CardStyle } from "../../../styles/ViewsStyles/HomeStyle/CardStyle";

export default function Card({
    avatarImg,
    category,
    username,
    userId
}) {


    return (
        <CardStyle >
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
                {/* //TODO display part of his goals make a trim func */}
                <p>IT career: Lorem ipsum jahl oal asl elisa dlai.</p>
            </div>
            <Link to={`/profile/${userId || "userID"}`}>
                Show Details
            </Link>
        </CardStyle>
    )
}