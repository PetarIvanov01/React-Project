import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../../util/_mockAvatars";
import { editProfile, getProfileDetails } from "../../../../api/profileApi";

export default function EditProfile() {

    const navigate = useNavigate();
    const { userId } = useParams();
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [selectedBox, setSelectedBox] = useState([]);
    const [profile, setProfile] = useState({
        username: '',
        about: '',
        avatarImg: ''
    })

    useEffect(() => {

        getProfileDetails(userId)
            .then(d => {
                setProfile(d);

                setSelectedBox([d.category]);
            })
            .catch(err => console.log(err.message))

    }, [userId])

    const handleAvatarChange = (selectedOption) => {
        setSelectedAvatar(selectedOption);
    };

    const onChangeHandler = (e) => {
        setProfile((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onClickHandle = (e) => {

        const checkboxName = e.target.name;

        if (selectedBox.length >= 1) {
            e.target.checked = false;
            setSelectedBox((prevSelected) =>
                prevSelected.filter((name) => name !== checkboxName)
            );
            return
        }
        if (e.target.checked) {
            setSelectedBox((prevSelected) => [...prevSelected, checkboxName]);
        }
        else {
            setSelectedBox((prevSelected) =>
                prevSelected.filter((name) => name !== checkboxName)
            );
        }
    };

    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const data = {
                username: profile.username,
                avatarImg: selectedAvatar.value,
                category: selectedBox[0],
                aboutMe: profile.about
            }

            await editProfile(userId, data)

            navigate(`/profile/${userId}`);
        }
        catch (error) {
            navigate('/login')
            return;
        }
    }

    return (
        <FormContainerStyle>

            <AvatarSelectorContainer>
                <h2>Edit your profile</h2>
                <form onSubmit={onSubmitHandler} action="#" method="post">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required="" onChange={onChangeHandler} value={profile.username} />
                    <label htmlFor="avatar">Choose your avatar image:</label>
                    <CustomSelect
                        isClearable={true}
                        defaultValue={profile.avatarImg}
                        value={selectedAvatar}
                        onChange={handleAvatarChange}
                        options={avatars}
                        components={{
                            Option: ({ innerProps, data }) => (
                                <div {...innerProps}>
                                    <AvatarImage src={data.value} />
                                </div>
                            )
                        }}
                    />

                    <label htmlFor="category">Category:</label>
                    <CustomCategorySelect >
                        <label htmlFor="sport">Sport
                            <input type="checkbox" id="sport" name="sport" checked={selectedBox.includes('sport')} onChange={onClickHandle} />
                        </label>

                        <label htmlFor="lifestyle">Lifestyle
                            <input type="checkbox" id="lifestyle" name="lifestyle" checked={selectedBox.includes('lifestyle')} onChange={onClickHandle} />
                        </label>

                        <label htmlFor="career">Career
                            <input type="checkbox" id="career" name="career" checked={selectedBox.includes('career')} onChange={onClickHandle} />
                        </label>
                    </CustomCategorySelect>

                    <div>
                        <label htmlFor="aboutMe">About Me:
                            <textarea name="about" id="about" cols="30" rows="5" onChange={onChangeHandler} value={profile.about}></textarea>
                        </label>
                    </div>

                    <button type="submit">Finished!</button>
                </form>
            </AvatarSelectorContainer>

        </FormContainerStyle>
    )
}

