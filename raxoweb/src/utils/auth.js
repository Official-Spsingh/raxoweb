import { getCookie, setCookie } from '@utils/cookie'
import makeRequest from '@utils/makeRequest'
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
    makeRequest.postLogout()
        .then(response => {
            if (response.status == 200) {
                setCookie('accessToken', "", 0)
                setCookie('refreshToken', "", 0)
                window.location.reload()
            }
        })
        .catch(error => {
            console.log("err")
            setCookie('accessToken', "", 0)
            setCookie('refreshToken', "", 0)
            window.location.reload()
        })
}