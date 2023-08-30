import { useState } from "react";
import { CreateContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/Create.style";
import { AvatarImage, AvatarSelectorContainer, CustomCategorySelect, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile.style";
import { avatars } from "../../../../util/_mockAvatars";

//TODO : Fetch data and fill the inputs 
export default function EditProfile() {

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarChange = (selectedOption) => {
        setSelectedAvatar(selectedOption);
    };
    return (
        <CreateContainerStyle>

            <AvatarSelectorContainer>
                <h2>Edit your profile</h2>
                <form action="#" method="post">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required="" />
                    <label htmlFor="avatar">Choose your avatar image:</label>
                    <CustomSelect
                    isClearable={true}
                        value={selectedAvatar}
                        onChange={handleAvatarChange}
                        options={avatars}
                        components={{
                            Option: ({ innerProps, data }) => (
                                <div {...innerProps}>
                                    <AvatarImage  src={data.value} />
                                </div>
                            )
                        }}
                    />

                    <label htmlFor="category">Category:</label>
                    <CustomCategorySelect >
                        <label htmlFor="sport">Sport
                            <input type="checkbox" id="sport" name="sport" value="sport" />
                        </label>

                        <label htmlFor="lifestyle">Lifestyle
                            <input type="checkbox" id="lifestyle" name="lifestyle" value="lifestyle" />
                        </label>

                        <label htmlFor="career">Career
                            <input type="checkbox" id="career" name="career" value="career" />
                        </label>
                    </CustomCategorySelect>

                    <div>
                        <label htmlFor="aboutMe">About Me:
                            <textarea name="aboutMe" id="aboutMe" cols="30" rows="5" ></textarea>
                        </label>
                    </div>

                    <button type="submit">Finished!</button>
                </form>
            </AvatarSelectorContainer>

        </CreateContainerStyle>
    )
}

