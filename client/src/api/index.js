import axios from 'axios'
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URI}/wedding/api`
})
export const insertGuest = payload => api.post(`/guest`, payload, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const getAllGuests = () => api.get(`/guest`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const updateGuestById = (id, payload) => api.put(`/guest/${id}`, payload, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const deleteGuestById = id => api.delete(`/guest/${id}`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const getGuestById = id => api.get(`/guest/${id}`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})

export const tokenIsValid = () => api.post(`/users/tokenIsValid`)
export const getUser = () => api.get(`/users/`)
export const loginUser = (payload) => api.post(`users/login`, payload)
export const registerUser = (payload) => api.post(`users/register`, payload)

const apis = {
    insertGuest,
    getAllGuests,
    updateGuestById,
    deleteGuestById,
    getGuestById,
    tokenIsValid,
    getUser,
    loginUser,
    registerUser
}

export default apis