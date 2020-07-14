import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123-456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const typeContactName = (event) => {
    setNewName(event.target.value)
  }

  const typeContactNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()

    if (newName && newNumber) {
      const isNewName = (name) => {
        return persons.every(person => {
          return person.name !== name
        })
      }
      
      if (isNewName(newName)) {
        const newPersonList = persons.concat({
          name: newName,
          number: newNumber
        })
        setPersons(newPersonList)
        setNewName('')
        setNewNumber('')
      } else {
        alert(`${newName} is already added to phonebook!`)
      }
    } else {
      alert(`Add both name and number!`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name: 
          <input
            value={newName}
            onChange={typeContactName} 
            placeholder="add new contact..."
          />
        </div>
        <div>
          number: 
          <input
            value={newNumber}
            onChange={typeContactNumber} 
            placeholder="add contact's number..." 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) =>
          <li key={person.name + index}>
            {person.name} {person.number ? person.number : false}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App