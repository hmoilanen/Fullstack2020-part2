import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const getJSON = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log(response);
      setPersons(response.data)
    })
  }
  useEffect(getJSON, [])

  const [ persons, setPersons ] = useState([]) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newSearch={newSearch}
        typeNameForFiltering={typeNameForFiltering}
      />
      <h2>Add new contact</h2>
      <PersonForm
        addNewContact={addNewContact}
        newName={newName}
        typeContactName={typeContactName}
        newNumber={newNumber}
        typeContactNumber={typeContactNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newSearch={newSearch}
      />
    </div>
  )
}

export default App