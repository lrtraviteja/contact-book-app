import axios from "axios";

const baseURL = (import.meta.env && import.meta.env.VITE_API_BASE) ? import.meta.env.VITE_API_BASE : '/api';

const api = axios.create({ baseURL })

export const fetchContacts = (page = 1, limit = 10) => api.get(`/contacts?page=${page}&limit=${limit}`);
export const createContact = (contactData) => api.post('/contacts', contactData);
export const deleteContact = (id) => api.delete(`/contacts/${id}`);
export const deleteAllContacts = () => api.delete('/contacts/1?all=true');

export default {fetchContacts, createContact, deleteContact, deleteAllContacts}