var jwt = require("jsonwebtoken"); 
import { config } from "../config/apiConfig";

// creating a JWT token with an expiration of 10 minutes
export const makeJWT = (userId: string): string => {
    const now = Math.floor(Date.now() / 1000);

    return jwt.sign({iss: "PFA", sub: userId, iat: now, exp: "10 minutes"}, config.jwt_secret!);
}; 

// verifying a JWT token 
export const verifyJWT = (token: string): string => {
    return jwt.verify(token, config.jwt_secret!);
}; 