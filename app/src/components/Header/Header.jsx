import { useAuth } from "../../contexts/auth";
import { HeaderStyle, SignInStyle, AnchorNavs, LogoContainer } from "../../styles/layout/Header.style";
import logo from '/imgs/svg/logo.svg';

export default function Header() {

    const { user } = useAuth();

    const status = (isActive) => isActive ? "active" : "";

    return (
        <HeaderStyle>
            <nav>
                <LogoContainer>
                    <AnchorNavs className={status()} to="/" >
                        <div className="logo-icon">
                            <img src={logo} alt="logo" />
                        </div>
                    </AnchorNavs>
                </LogoContainer>
                <div className="goals">
                    <AnchorNavs className={status()} to="/goals">Browse</AnchorNavs>
                </div>

                {user.id ?

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