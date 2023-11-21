import { useAuth } from "../../contexts/auth";
import { HeaderStyle, SignInStyle,AnchorNavs } from "../../styles/layout/Header.style";
import { Link } from "react-router-dom";

export default function Header() {

    const { user } = useAuth();

    const status = (isActive) => isActive ? "active" : "";

    return (
        <HeaderStyle>
            <nav>
                <div className="logo">
                    <Link to="/" className="logo-icon">
                        <img src="/imgs/Avatars/logo.png" alt="" />
                    </Link>
                </div>
                <div className="goals">
                    <AnchorNavs className={status()} to="/goals">Browse</AnchorNavs>
                </div>

                {user ?

                    <SignInStyle >
                        <AnchorNavs className={status()} to={`/profile/${user.id}`} >Profile</AnchorNavs>
                        <AnchorNavs className={status()} to="/create" >Create</AnchorNavs>
                        <AnchorNavs className={status()} to="/logout" >Logout</AnchorNavs>
                    </SignInStyle> :

                    <SignInStyle>
                        <AnchorNavs className={status()} to="/login" >Sign In</AnchorNavs>
                        <AnchorNavs className={status()} to="/register" >Sign Up</AnchorNavs>
                    </SignInStyle>
                }

            </nav>
        </HeaderStyle>
    )
}