import { Link } from "react-router-dom";
import { CardStyle } from "../../../styles/ViewsStyles/HomeStyle/CardStyle";
import { CardContainerStyle } from "../../../styles/ViewsStyles/HomeStyle/CardsContainer.style";

export default function CardContainer() {

    return (
        <CardContainerStyle >

            <CardStyle >
                <div className="profile">
                    <img
                        className="avatar"
                        src="./imgs/Avatars/Avatar-1.png"
                        alt=""
                    />
                    <p>Full name</p>
                </div>
                <div className="categories">
                    <p>Categories</p>
                    <ul>
                        <li>
                            <div className="category-li">
                                <p>career</p>
                                <img src="./imgs/Icons/job.svg" alt="" />
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="posts">
                    <p>IT career: Lorem ipsum jahl oal asl elisa dlai.</p>
                </div>
                <Link to={'/profile/:id'}>
                    Show Details
                </Link>
            </CardStyle>

            <CardStyle >
                <div className="profile">
                    <img
                        className="avatar"
                        src="./imgs/Avatars/Avatar-2.png"
                        alt=""
                    />
                    <p>Full name</p>
                </div>
                <div className="categories">
                    <p>Categories</p>
                    <ul>
                        
                        <li>
                            <div className="category-li">
                                <p>career</p>
                                <img src="./imgs/Icons/job.svg" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="posts">
                    <p>IT career: Lorem ipsum jahl oal asl elisa dlai.</p>
                </div>
                <Link to={'/profile/:id'}>
                    Show Details
                </Link>
            </CardStyle>

        </CardContainerStyle>
    )
}