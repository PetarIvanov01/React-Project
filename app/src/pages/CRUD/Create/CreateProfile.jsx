import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProfileState from "../../../hooks/profileReducer";

import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect, FormContainerStyle } from "../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../util/_mockAvatars";
import { BlurredBackground } from "../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style";

import { createProfile } from "../../../api/services/profileApi";
import validateData from "../../../validations/validateDataForProfile";
import { ButtonStyle, InputField, TextArea } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { CreateProfileBox } from "../../../styles/ViewsStyles/ErrorBoxs.style";

export default function CreateProfile() {

    const navigate = useNavigate();

    const [error, setError] = useState('');

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
                avatarImg: state.avatar,
                category: state.categories[0],
                aboutMe: state.aboutMe
            }
            validateData(data);

            const { userId } = await createProfile(data);
            navigate(`/profile/${userId}`);
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <BlurredBackground $show={'true'}>
            {error && <CreateProfileBox><p>{error}</p></CreateProfileBox>}

            <FormContainerStyle>

                <AvatarSelectorContainer>
                    <h2 >Customize your profile</h2>
                    <form onSubmit={onSubmitHandler}>
                        <InputField>
                            <input type="text"
                                id="username"
                                name="username"
                                placeholder="Username..."
                                required=""
                                onChange={setUsername}
                                value={state.username} />
                        </InputField>

                        <CustomSelect
                            placeholder="Select avatar image"
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

                        <label htmlFor="category" className="category">Category:</label>
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

                        <TextArea>
                            <textarea name="aboutMe" id="aboutMe" placeholder="About Me..." cols="30" rows="5" onChange={setAboutMe} value={state.aboutMe} ></textarea>
                        </TextArea>
                        <ButtonStyle>
                            <button type="submit">Finished!</button>
                        </ButtonStyle>
                    </form>
                </AvatarSelectorContainer>

            </FormContainerStyle>
        </BlurredBackground>
    )
}

