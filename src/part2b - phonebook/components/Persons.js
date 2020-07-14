import React from 'react'

const Persons = ({ persons, newSearch }) => {
  const filteredPersons = newSearch.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    : persons

  return (
    <ul>
      {filteredPersons.map((person, index) =>
        <li key={person.name + index}>
          {person.name}: {person.number ? person.number : false}
        </li>
      )}
    </ul>
  )  
}

export default Persons
