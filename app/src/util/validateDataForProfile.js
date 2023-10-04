export default function validateData({
    username,
    avatarImg,
    category,
    aboutMe,
}) {


    try {

        if (!username || !avatarImg || category.length || !aboutMe) {
            throw new Error('All fields are required!');
        }

    } catch (error) {

        throw error;
    }


}