import { Link } from "react-router-dom";
import { CardStyle } from "../../../styles/ViewsStyles/HomeStyle/CardHomeStyle.style";

export default function ExampleCard() {

    return (
        <CardStyle >
            <div className="profile">
                <img
                    className="avatar"
                    src={"/imgs/Avatars/Avatar-2.png"}
                    alt=""
                />
                <p>"Full Name"</p>
            </div>
            <div className="categories">
                <p>Categories</p>
                <ul>
                    <li>
                        <div className="category-li">
                            <p>"sport"</p>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="posts">
                    <h4>Only an Example</h4>
            </div>
            <Link to={`/login`}>
                Go and be first
            </Link>
        </CardStyle>
    )
}
