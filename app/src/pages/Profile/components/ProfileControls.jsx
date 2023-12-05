import { Controllers } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { EditProfileStyle } from "../../../styles/ViewsStyles/ProfileStyle/CardStyle.style";
import FollowersToggle from "./Followers/FollowersToggle";
import editSvg from '/imgs/svg/edit.svg';

import { Link } from "react-router-dom";

export function ProfileControls({ followers, userId, isOwner, profileId }) {

    const isAuthenticatedOwner = userId && isOwner;

    return (
        <Controllers>
            <FollowersToggle followers={followers} />

            {isAuthenticatedOwner &&
                <EditProfileStyle>
                    <Link to={`/edit/profile/${profileId}`}><img src={editSvg} alt="Edit Icon" /></Link>
                </EditProfileStyle>
            }
        </Controllers>
    )
}