import React, { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Feedback from './components/Feedback'

const App = () => {
  const getJSON = () => {
    contactService
      .getAllContacts()
      .then(contacts => {
        setPersons(contacts)
      })
  }
  useEffect(getJSON, [])

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ newFeedback, setNewFeedback ] = useState('')

  const typeContactName = (event) => {
    setNewName(event.target.value)
  }

  const typeContactNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const typeNameForFiltering = (event) => {
    setNewSearch(event.target.value)
  }

  const clearInputValues = () => {
    setNewName('')
    setNewNumber('')
  }

  const addNewContact = (event) => {
    event.preventDefault()

    if (newName && newNumber) {
      const newContact = {
        name: newName,
        number: newNumber
      }
      const isNewName = (name) => {
        return persons.every(person => {
          return person.name !== name
        })
      }
      
      if (isNewName(newName)) {
        contactService
          .createContact(newContact)
          .then(addedContact => {
            console.log('added contact:', addedContact);
            setPersons(persons.concat(addedContact))
            setNewFeedback({
              message: `Added ${newName.toUpperCase()}!`,
              success: true
            })
            clearInputValues()
            setTimeout(() => {
              setNewFeedback(false)
            }, 3000);
          })
      } else {
        const confirmed = window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)
        
        if (confirmed) {
          const contactId = persons.find(person => person.name === newName).id
          contactService
            .updateContact(newContact, contactId)
            .then(updatedContact => {
              setPersons(persons.map(person => person.id !== updatedContact.id ? person : updatedContact))
              setNewFeedback({
                message: `Updated ${updatedContact.name.toUpperCase()}'s number!`,
                success: true
              })
              clearInputValues()
              setTimeout(() => {
                setNewFeedback(false)
              }, 3000);
            })
            .catch(error => {
              //console.log(error);
              setNewFeedback({
                message: `Information of ${newContact.name.toUpperCase()} has already been removed from the server!`,
                success: false
              })
              setTimeout(() => {
                setNewFeedback(false)
              }, 3000);
            })
        }
      }
    } else {
      alert(`Add both name and number!`)
    }
  }

  const deleteContact = (contact) => {
    const confirmed = window.confirm(`Delete ${contact.name}?`)

    if (confirmed) {
      contactService
        .deleteContact(contact.id)
        .then(response => {
          console.log('deleted contact:', response);
          setPersons(persons.filter(person => person.id !== contact.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newSearch={newSearch}
        typeNameForFiltering={typeNameForFiltering}
      />
      <Feedback newFeedback={newFeedback}/>
      <h2>Add new contact</h2>
      <PersonForm
        newName={newName}
        typeContactName={typeContactName}
        newNumber={newNumber}
        typeContactNumber={typeContactNumber}
        addNewContact={addNewContact}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newSearch={newSearch}
        deleteContact={deleteContact}
      />
    </div>
  )
}

export default App