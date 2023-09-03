import { useAuth } from "../../contexts/auth";
import { HeaderStyle, SignInStyle } from "../../styles/Header.style";
import { Link } from "react-router-dom";

export default function Header() {

    const { user } = useAuth();

    return (
        <HeaderStyle>
            <nav>
                <div className="logo">
                    <Link to="/" className="logo-icon">
                        <img src="/imgs/Avatars/logo.png" alt="" />
                    </Link>
                </div>
                <div className="goals">
                    <Link to="/goals">Browse</Link>
                </div>

                {user ?

                    <SignInStyle >
                        <Link to={`/profile/${user.id}`} >Profile</Link>
                        <Link to="/create" >Create</Link>
                        <Link to="/logout" >Logout</Link>
                    </SignInStyle> :

                    <SignInStyle>
                        <Link to="/login" >Sign In</Link>
                        <Link to="/register" >Sign Up</Link>
                    </SignInStyle>
                }

            </nav>
        </HeaderStyle>
    )
}