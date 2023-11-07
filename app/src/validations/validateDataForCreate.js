export default function validateDataCreate({
    title,
    image,
    description
}) {

    const errors = []

    if (title === '' || image === '' || description === '') {
        errors.push({ message: 'All fields are required!' })
    }
    else {
        if (title.length > 40) {
            errors.push({ message: 'Title is too long. It must be 40 characters or less.' });
        }

        const imageUrlRegex = /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i;
        if (!imageUrlRegex.test(image)) {
            errors.push({ message: 'Invalid image URL. Please provide a valid URL ending with .jpg, .jpeg, .png, .gif, .bmp, .svg, or .webp.' });
        }
    }

    return errors

}