import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = 'https://sheltered-crag-90637.herokuapp.com/api/persons'

const getAllContacts = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createContact = newContactObject => {
  const request = axios.post(baseUrl, newContactObject)
  return request.then(response => response.data)
}

const deleteContact = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response)
}

const updateContact = (updatedContactObject, id) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedContactObject)
  return request.then(response => response.data)
}

export default {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact
}