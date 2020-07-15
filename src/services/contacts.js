import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllContacts = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createContact = newContactObject => {
  const request = axios.post(baseUrl, newContactObject)
  return request.then(response => response.data)
}

/* const updateNote = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
} */

export default { getAllContacts, createContact }