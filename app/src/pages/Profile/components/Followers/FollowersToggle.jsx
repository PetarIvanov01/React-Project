import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Followers, StyledParagraph, ShowFollowers } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";

import { getFollowers } from "../../../../api/services/profileApi";
import useErrorBoundryAsync from "../../../../hooks/useErrorBoundryAsync";

export default function FollowersToggle({ followers }) {

    const throwToErrBoundry = useErrorBoundryAsync();
    const navigate = useNavigate();
    const [followersData, setFollowersData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const followersContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (followersContainerRef.current && !followersContainerRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        if (followers.length !== 0) {
            getFollowers(followers)
                .then(data => {
                    const result = data.map(({ id, username, avatarImg }) => ({ id, username, avatarImg }))
                    setFollowersData(result)
                }
                )
                .catch(throwToErrBoundry)
        }
    }, [followers,throwToErrBoundry]);

    async function onClickShowFollowers(e) {
        setToggle((state) => !state)
    };

    function onClickNavigate(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const userId = target.dataset.userId;

        setToggle(false)
        navigate(`/profile/${userId}`, { replace: true })

    };

    return (
        <Followers ref={followersContainerRef} onClick={onClickShowFollowers}>
            <StyledParagraph>Followers: {followers.length}</StyledParagraph>
            <ShowFollowers $show={followers.length ? toggle.toString() : 'false'}>
                {followers.length &&
                    followersData.map(({ id, username, avatarImg }) => (
                        <div data-user-id={id} onClick={onClickNavigate} key={id} className="user">
                            <img src={avatarImg.value} alt={avatarImg.label} />
                            <p>{username}</p>
                        </div>
                    ))
                }
            </ShowFollowers>
        </Followers>
    )
};