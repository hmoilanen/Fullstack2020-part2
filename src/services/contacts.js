import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

/* const getAllNotes = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
  //return request.then(response => response.data)
} */

const createNote = newContactObject => {
  const request = axios.post(baseUrl, newContactObject)
  return request.then(response => response.data)
}

/* const updateNote = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
} */

export default { createNote }