import React from 'react'

const PersonForm = ({addNewContact, newName, typeContactName, newNumber, typeContactNumber}) => {
  return (
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
  )
}

export default PersonForm