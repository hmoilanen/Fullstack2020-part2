import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const typeContactName = (event) => {
    setNewName(event.target.value)
  }

  const typeContactNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const typeNameForFiltering = (event) => {
    setNewSearch(event.target.value)
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
  
  const filteredPersons = newSearch.length > 0
  ? persons.filter(person => person.name.toLowerCase().includes(newSearch))
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter contacts by name: 
        <input
          value={newSearch}
          onChange={typeNameForFiltering} 
          placeholder="add contact name to filter..." 
        />
      </div>

      <h2>Add new contact</h2>
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
      <div>debug: {newSearch}</div>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) =>
          <li key={person.name + index}>
            {person.name} {person.number ? person.number : false}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App