import React from 'react'

const Filter = ({ newSearch, typeNameForFiltering}) => {
  return (
    <div>
        filter contacts by name: 
        <input
          value={newSearch}
          onChange={typeNameForFiltering} 
          placeholder="add contact name to filter..." 
        />
      </div>
  )
}

export default Filter