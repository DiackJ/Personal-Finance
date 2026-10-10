const argon2 = require("argon2");

const passwordRegex: RegExp = /^(?=.+\d)(?=.+[a-z])(?=.+[A_Z])(?=.*[a-zA-Z])(?=.+[!@#$%^&*.]),{8,}$/

// password hash function
export const hashPassword = (passwordInput: string): string => {
    if (!passwordRegex.test(passwordInput)) {
        throw new Error("password must contain: 8 or more characters, 1 uppercase letter, 1 number, and 1 special character.");
    }

    return argon2.hash(passwordInput);
};


// create refresh token function
