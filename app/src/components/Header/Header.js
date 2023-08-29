import { HeaderStyle, SignInStyle } from "../../styles/Header.style";
import { Link } from "react-router-dom";

export default function Header() {


    return (
        <HeaderStyle>
            <nav>
                <div className="logo">
                    <Link to="/" className="logo-icon">
                        <img src="/imgs/Avatars/logo.png" alt="" />
                    </Link>
                </div>
                <div className="goals">
                    <Link to="/goals">Goals</Link>
                </div>

                {false ?

                    <SignInStyle>
                        <Link to="/login" >Sign In</Link>
                        <Link to="/register" >Sign Up</Link>
                    </SignInStyle> :

                    <SignInStyle >
                        <Link to="/profile/:userId" >Profile</Link>
                        <Link to="/create" >Create</Link>
                        <Link to="/logout" >Logout</Link>
                    </SignInStyle>}

            </nav>
        </HeaderStyle>
    )
}