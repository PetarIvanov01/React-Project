import { Link } from "react-router-dom"
import { CardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"

export default function Card() {


    return (
            <CardsStyle >
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
                                <p>Bussines</p>
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
            </CardsStyle>
    )
}