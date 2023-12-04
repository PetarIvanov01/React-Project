export default function validateData({
    username,
    avatarImg,
    category,
    aboutMe,
}) {
    const errors = []

    if (username === '' || avatarImg === null || aboutMe === '') {
        errors.push({ message: 'All fields are required!' });
    }
    else {

        if (username.trim().length < 3) {
            errors.push({ message: 'Username must be at least 3 characters long.' });
        }

        if (username.trim().length > 10) {
            errors.push({ message: 'Username must be 10 characters or fewer.' });
        }

        if (!category || category.length === 0) {
            errors.push({ message: 'Select at least one category.' });
        }

        if (aboutMe.trim().length > 250) {
            errors.push({ message: 'About Me must be less than 250 characters long.' });
        }

        if (aboutMe.trim().length < 30) {
            errors.push({ message: 'About Me must be at least 30 characters long.' });
        }
    }
    return errors
}