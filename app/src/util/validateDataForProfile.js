export default function validateData({
    username,
    avatarImg,
    category,
    aboutMe,
}) {


    try {

        if (username === '' || avatarImg === undefined || category === undefined || aboutMe === '') {

            throw new Error('All fields are required!');
        }

    } catch (error) {

        throw error;
    }


}