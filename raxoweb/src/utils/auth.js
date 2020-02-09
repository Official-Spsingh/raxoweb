import { getCookie, setCookie } from '@utils/cookie'
let userAuthenticated = false
export const isUserAuthenticated = () => {
    if (getCookie('accessToken').length > 25 && userAuthenticated)
        return true;
    return false;
}

export const setUserAuthentication = (type) => {
    userAuthenticated = type
}

export const logoutUser = () => {
    setCookie('accessToken', "", 0)
    setCookie('refreshToken', "", 0)
    window.location.reload()
}