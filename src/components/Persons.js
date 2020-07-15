import React from 'react'

const Persons = ({ persons, newSearch, deleteContact }) => {
  const filteredPersons = newSearch.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    : persons

  return (
    <ul>
      {filteredPersons.map((person, index) =>
        <li key={person.name + index}>
          <span>{person.name}: {person.number}</span>
          <button onClick={() => deleteContact(person)}>delete</button>
        </li>
      )}
    </ul>
  )  
}

export default Persons
