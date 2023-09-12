import { useNavigate } from "react-router-dom";
import useProfileState from "../../../../hooks/profileReducer";

import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../../util/_mockAvatars";
import { BlurredBackground } from "../../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style";

import { createProfile } from "../../../../api/profileApi";

export default function CreateProfile() {

    const navigate = useNavigate();

    const { toggleCategory,
        setUsername,
        setAboutMe,
        chooseAvatar,
        state } = useProfileState(null);

    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const data = {
                username: state.username,
                avatarImg: state.avatar.value,
                category: state.categories[0],
                aboutMe: state.aboutMe
            }

            const { userId } = await createProfile(data);

            navigate(`/profile/${userId}`);
        }
        catch (error) {
            navigate('/login')
            return;
        }
    }

    return (
        <BlurredBackground $show={'true'}>
            <FormContainerStyle>

                <AvatarSelectorContainer>
                    <h2>Customize your profile</h2>
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
                        <CustomCategorySelect  >
                            <label htmlFor="sport">Sport
                                <input type="checkbox" id="sport" name="sport" onChange={toggleCategory} value="sport" />
                            </label>

                            <label htmlFor="lifestyle">Lifestyle
                                <input type="checkbox" id="lifestyle" name="lifestyle" onChange={toggleCategory} value="lifestyle" />
                            </label>

                            <label htmlFor="career">Career
                                <input type="checkbox" id="career" name="career" onChange={toggleCategory} value="career" />
                            </label>
                        </CustomCategorySelect>

                        <div>
                            <label htmlFor="aboutMe">About Me:
                                <textarea name="aboutMe" id="aboutMe" cols="30" rows="5" onChange={setAboutMe} value={state.aboutMe} ></textarea>
                            </label>
                        </div>

                        <button type="submit">Finished!</button>
                    </form>
                </AvatarSelectorContainer>

            </FormContainerStyle>
        </BlurredBackground>
    )
}

