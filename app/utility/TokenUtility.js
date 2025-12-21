import { JWT_KEY, JWT_EXPIRE } from "../config/settings.js";

/**
 * ---------------------------------------------------------
 * Function: encodeToken
 * ---------------------------------------------------------
 * Purpose:
 * This function generates a JSON Web Token (JWT) for
 * authenticating a user after successful login or signup.
 *
 * Description:
 * - Accepts user-specific details (email and user_id)
 * - Creates a payload containing these details
 * - Signs the payload using a secret key
 * - Applies an expiration time to enhance security
 *
 * Security Considerations:
 * - JWT_KEY should be stored securely (e.g., environment variables)
 * - JWT_EXPIRE controls token validity and limits misuse
 *
 * Parameters:
 * @param {string} email    - Registered user email address
 * @param {string|number} user_id - Unique identifier of the user
 *
 * Returns:
 * @returns {string} Signed JWT token
 * ---------------------------------------------------------
 */
export const encodeToken = (email, user_id) => {
    const KEY = JWT_KEY;
    const EXPIRE = {expiresIn: JWT_EXPIRE};
    const PAYLOAD = {email: email, user_id: user_id};
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
}

/**
 * ---------------------------------------------------------
 * Function: decodeToken
 * ---------------------------------------------------------
 * Purpose:
 * This function verifies and decodes an incoming JWT token
 * to authenticate requests and extract user information.
 *
 * Description:
 * - Validates the token using the same secret key
 * - Ensures token integrity and expiration validity
 * - Returns decoded payload if verification is successful
 * - Handles invalid or expired tokens gracefully
 *
 * Error Handling:
 * - Uses try-catch to prevent application crashes
 * - Returns null when token verification fails
 *
 * Parameters:
 * @param {string} token - JWT token received from client
 *
 * Returns:
 * @returns {object|null} Decoded token payload or null if invalid
 * ---------------------------------------------------------
 */
export const decodeToken = (token) => {
    try{
        return jwt.verify(token, JWT_KEY);
    }
    catch(err){
        return null;
    }
}