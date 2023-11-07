export function validateAuth(fields, isRegistering) {
    try {
        if (Object.entries(fields).some(([k, v]) => v === "" && k !== "err")) {
            throw new Error("All fields are required. Please fill in all the required fields.");
        }

        if (isRegistering && fields.password !== fields.confirmPassword) {
            throw new Error("Passwords don't match. Please make sure the passwords match.");
        }
    } catch (error) {
        throw error;
    }
}
