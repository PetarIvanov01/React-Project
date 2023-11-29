import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProfileState from "../../../hooks/profileReducer";

import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect, FormContainerStyle, customStyles } from "../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../util/_mockAvatars";

import { editProfile, getProfileDetails } from "../../../api/services/profileApi";
import { ButtonStyle, InputField, TextArea } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import validateData from "../../../validations/validateDataForProfile";
import { CreateProfileBox } from "../../../styles/ViewsStyles/ErrorBoxs.style";
import { BlurredBackground } from "../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style";

import useError from "../../../hooks/useError";
import useErrorBoundryAsync from "../../../hooks/useErrorBoundryAsync";

export default function EditProfile() {

    const throwToErrBoundry = useErrorBoundryAsync();

    const navigate = useNavigate();
    const { userId } = useParams();

    const { errors, setErrorData } = useError();

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
            .catch(throwToErrBoundry)

    }, [userId, handleEditForm, throwToErrBoundry]);


    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const data = {
                username: state.username,
                avatarImg: state?.avatar,
                category: state.categories[0],
                aboutMe: state?.aboutMe
            }

            const errors = validateData(data);
            if (errors.length) throw errors;

            await editProfile(userId, data)
            navigate(`/profile/${userId}`);

        }
        catch (error) {
            if (error.message === 'Not Authorized' || error.type === 'TokenExpiredError') {
                throwToErrBoundry(error);
            }
            setErrorData(error);
        }
    };

    return (

        <BlurredBackground $show={'true'}>

            {errors &&
                <CreateProfileBox>
                    {errors.map((e, i) => <p key={i}>{e.message}</p>)}
                </CreateProfileBox>
            }

            <FormContainerStyle>

                <AvatarSelectorContainer>
                    <h2>Edit your profile</h2>
                    <form onSubmit={onSubmitHandler} action="#" method="post">
                        <InputField>
                            <input type="text" id="username" name="username" placeholder="Username..." required="" onChange={setUsername} value={state.username} />
                        </InputField>
                        <CustomSelect
                            placeholder="Select avatar image"
                            isClearable={true}
                            value={state.avatar}
                            onChange={chooseAvatar}
                            options={avatars}
                            components={{
                                Option: ({ innerProps, data }) => (
                                    <div className="options" {...innerProps}>
                                        <AvatarImage src={data.value} />
                                        <span className="label">{data.label}</span>
                                    </div>
                                )

                            }}

                            styles={customStyles}
                        />

                        <label htmlFor="category" className="category">Category:</label>
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

                        <TextArea>
                            <textarea name="aboutMe" id="aboutMe" placeholder="About Me..." cols="30" rows="5" onChange={setAboutMe} value={state.aboutMe}></textarea>
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

