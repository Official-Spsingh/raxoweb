import baseUrl from './baseUrlConfig'
import axios from 'axios'
import { getCookie } from '@utils/cookie'
const makeRequest = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}${url}`)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error)
                })
        })
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'post',
                    url: `${baseUrl}${url}`,
                    data: data
                })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error)
                })
        })
    },
    postLogout: () => {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'post',
                    url: `${baseUrl}logout`,
                    auth: {
                        Bearer: getCookie('accessToken')
                    },
                    headers: {
                        'authorization': `Bearer ${getCookie('accessToken')}`,
                    }
                })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error)
                })
        })
    }
}
export default makeRequest;