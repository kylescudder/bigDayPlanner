import axios from 'axios'
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URI}`
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

export const tokenIsValid = () => api.post(`/user/tokenIsValid`, null, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const getUser = () => api.get(`/user`, {
    headers: { "x-auth-token": localStorage.getItem("auth-token") }
})
export const loginUser = (payload) => api.post(`/user/login`, payload)
export const registerUser = (payload) => api.post(`/user/register`, payload)

export const getGuestGroup = () => api.get(`/getGuestGroup`, {
    headers: { guestGroupID: localStorage.getItem("guestGroupID") },
})

const apis = {
  insertGuest,
  getAllGuests,
  updateGuestById,
  deleteGuestById,
  getGuestById,
  tokenIsValid,
  getUser,
  loginUser,
  registerUser,
  getGuestGroup,
};

export default apis