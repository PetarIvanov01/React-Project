export default function validateData({
    username,
    avatarImg,
    category,
    aboutMe,
}) {

    try {
        if (username === '' || avatarImg === null  || aboutMe === '') {
            throw new Error('All fields are required!');
        }

        if (username.trim().length < 3) {
            throw new Error('Username must be at least 3 characters long.');
        }

        if (!category || category.length === 0) {
            throw new Error('Select at least one category.');
        }

        if (aboutMe.trim().length > 250) {
            throw new Error('About Me must be less than 250 characters long.');
        }
        
        if (aboutMe.trim().length < 30) {
            throw new Error('About Me must be at least 30 characters long.');
        }

    } catch (error) {

        throw error;
    }
}