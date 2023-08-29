import { useState } from "react";
import { CreateContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/Create.style";
import { AvatarImage, AvatarSelectorContainer, CustomSelect } from "../../../../styles/ViewsStyles/CRUDStyle/CreateProfile";

export default function CreateProfile() {

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const avatars = [
        { id: 1, src: '/imgs/Avatars/Avatar-1.png' },
        { id: 2, src: '/imgs/Avatars/Avatar-2.png' },
    ];

    const handleAvatarChange = (selectedOption) => {
        setSelectedAvatar(selectedOption);
      };
    return (
        <CreateContainerStyle>

            <AvatarSelectorContainer>
                <h2>Customize your profile</h2>
                <form action="#" method="post">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required="" />
                    <label htmlFor="avatar">Choose your avatar image:</label>
                    <CustomSelect
                        value={selectedAvatar}
                        onChange={handleAvatarChange}
                        options={avatars}
                        components={{
                            Option: ({ innerProps, label, data }) => (
                                <div {...innerProps}>
                                    <AvatarImage src={data.src} alt={label} />
                                    {label}
                                </div>
                            ),
                        }}
                    />

                    <button type="submit">Finished!</button>
                </form>
            </AvatarSelectorContainer>

        </CreateContainerStyle>
    )
}