// import { CookieOptions, Request, Response } from "express";

// const setCookie = (res: Response, key: string, value: string, options: CookieOptions) => {
//     res.cookie(key, value, options);

// }

// const getCookie = ( req: Request, key: string) =>{
//    return req.cookies[key];
// }

// const clearCookie = (res: Response, key: string, options:CookieOptions) => {
//     res.clearCookie(key, options);
// }

// export const CookieUtils = {
//     setCookie,
//     getCookie,
//     clearCookie
// }


import { CookieOptions, Request, Response } from "express";

const setCookie = (res: Response, key: string, value: string, options: CookieOptions) => {
    res.cookie(key, value, options);
}

const getCookie = (req: Request, key: string) => {
    // Permanent Defend: Safely checks if cookies exist before evaluating key index
    return req.cookies?.[key];
}

const clearCookie = (res: Response, key: string, options: CookieOptions) => {
    res.clearCookie(key, options);
}

export const CookieUtils = {
    setCookie,
    getCookie,
    clearCookie
}