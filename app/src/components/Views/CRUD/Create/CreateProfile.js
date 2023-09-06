import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/Create.style";
import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../../util/_mockAvatars";
import { BlurredBackground } from "../../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style";
import { createProfile } from "../../../../api/profileApi";

export default function CreateProfile() {

    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [selectedBox, setSelectedBox] = useState([]);

    const [fields, setFields] = useState({
        username: '',
        aboutMe: ''
    })

    const handleAvatarChange = (selectedOption) => {
        setSelectedAvatar(selectedOption);
    };

    const onChangeHandle = (e) => {
        setFields((state) => ({ ...state, [e.target.name]: e.target.value }));
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
                username: fields.username,
                avatarImg: selectedAvatar.value,
                category: selectedBox[0],
                aboutMe: fields.aboutMe
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
            <CreateContainerStyle>

                <AvatarSelectorContainer>
                    <h2>Customize your profile</h2>
                    <form onSubmit={onSubmitHandler} action="#" method="post">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required="" onChange={onChangeHandle} value={fields.username} />
                        <label htmlFor="avatar">Choose your avatar image:</label>
                        <CustomSelect
                            isClearable={true}
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
                        <CustomCategorySelect  >
                            <label htmlFor="sport">Sport
                                <input type="checkbox" id="sport" name="sport" onChange={onClickHandle} value="sport" />
                            </label>

                            <label htmlFor="lifestyle">Lifestyle
                                <input type="checkbox" id="lifestyle" name="lifestyle" onChange={onClickHandle} value="lifestyle" />
                            </label>

                            <label htmlFor="career">Career
                                <input type="checkbox" id="career" name="career" onChange={onClickHandle} value="career" />
                            </label>
                        </CustomCategorySelect>

                        <div>
                            <label htmlFor="aboutMe">About Me:
                                <textarea name="aboutMe" id="aboutMe" cols="30" rows="5" onChange={onChangeHandle} >{fields.aboutMe}</textarea>
                            </label>
                        </div>

                        <button type="submit">Finished!</button>
                    </form>
                </AvatarSelectorContainer>

            </CreateContainerStyle>
        </BlurredBackground>
    )
}

