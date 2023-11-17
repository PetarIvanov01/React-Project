import { useCallback, useState } from "react"

export default function useError() {

    const [errors, setErrors] = useState(null)

    const setErrorData = useCallback((comingErrors) => {
        const extractedErrors = checkErrors(comingErrors)
        setErrors(extractedErrors);
    }, []);

    return {
        errors,
        setErrorData
    }
}

function checkErrors(errors) {
    if (errors.name === 'Error') {
        return [{ message: errors.message }]
    }
    if (Array.isArray(errors)) {
        return errors
    }
}