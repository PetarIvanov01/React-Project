import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProfileState from "../../../../hooks/profileReducer";

import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../../util/_mockAvatars";

import { editProfile, getProfileDetails } from "../../../../api/services/profileApi";

export default function EditProfile() {

    const navigate = useNavigate();
    const { userId } = useParams();

    const { handleEditForm,
        chooseAvatar,
        setAboutMe,
        setUsername,
        toggleCategory,
        state } = useProfileState();


    useEffect(() => {

        getProfileDetails(userId)
            .then(d => {
                handleEditForm({
                    type: 'editform',
                    payload: {
                        username: d.username,
                        aboutMe: d.aboutMe,
                        categories: [d.category],
                        avatar: d.avatarImg
                    }
                })
            })
            .catch(err => console.log(err.message))

    }, [userId, handleEditForm])


    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const data = {
                username: state.username,
                avatarImg: state.avatar.value,
                category: state.categories[0],
                aboutMe: state.aboutMe
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
                    <input type="text" id="username" name="username" required="" onChange={setUsername} value={state.username} />
                    <label htmlFor="avatar">Choose your avatar image:</label>
                    <CustomSelect
                        isClearable={true}
                        value={state.avatar}
                        onChange={chooseAvatar}
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
                            <input type="checkbox" id="sport" name="sport" checked={state.categories.includes('sport')} onChange={toggleCategory} value="sport" />
                        </label>

                        <label htmlFor="lifestyle">Lifestyle
                            <input type="checkbox" id="lifestyle" name="lifestyle" checked={state.categories.includes('lifestyle')} onChange={toggleCategory} value="lifestyle" />
                        </label>

                        <label htmlFor="career">Career
                            <input type="checkbox" id="career" name="career" checked={state.categories.includes('career')} onChange={toggleCategory} value="career" />
                        </label>
                    </CustomCategorySelect>

                    <div>
                        <label htmlFor="aboutMe">About Me:
                            <textarea name="aboutMe" id="aboutMe" cols="30" rows="5" onChange={setAboutMe} value={state.aboutMe}></textarea>
                        </label>
                    </div>

                    <button type="submit">Finished!</button>
                </form>
            </AvatarSelectorContainer>

        </FormContainerStyle>
    )
}

