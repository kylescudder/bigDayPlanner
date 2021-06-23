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

export const insertGuest = payload => api.post(`/guest`, payload)
export const getAllGuests = () => api.get(`/guest`)
export const updateGuestById = (id, payload) => api.put(`/guest/${id}`, payload)
export const deleteGuestById = id => api.delete(`/guest/${id}`)
export const getGuestById = id => api.get(`/guest/${id}`)


const apis = {
    insertGuest,
    getAllGuests,
    updateGuestById,
    deleteGuestById,
    getGuestById
}

export default apis