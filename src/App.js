import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const typeContactName = (event) => {
    setNewName(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()

    const isNewName = (name) => {
      return persons.every(person => {
        return person.name !== name
      })
    }
    
    if (isNewName(newName)) {
      const newPersonList = persons.concat({ name: newName })
      setPersons(newPersonList)
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook!`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name: 
          <input value={newName} onChange={typeContactName} placeholder="add new contact..." />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) =>
          <li key={person.name + index}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App