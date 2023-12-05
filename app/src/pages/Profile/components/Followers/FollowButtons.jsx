import { FollowContainer } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { followProfile, unFollowProfile } from "../../../../api/services/profileApi";

import follow from '/imgs/Icons/follow-hapy.png';
import unFollow from '/imgs/Icons/unfollow-sad.png'

import { Link } from "react-router-dom";

export function FollowButtons({ isOwner, isFollowed, onFollowClick }) {

    return (
        <FollowContainer>
            {isOwner ||
                (isFollowed ?
                    <Link onClick={(e) => onFollowClick(e, unFollowProfile)} ><img src={unFollow} alt="unfollow Icon" /></Link>
                    :
                    <Link onClick={(e) => onFollowClick(e, followProfile)} ><img src={follow} alt="follow Icon" /></Link>
                )
            }
        </FollowContainer>
    )
}