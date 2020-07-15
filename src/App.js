import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [ newSearch, setNewSearch ] = useState('')
  const [ listOfCountries, setListOfCountries ] = useState([])

  const getJSON = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log(response);
      setListOfCountries(response.data)
    })
  }
  useEffect(getJSON, [])

  const typeCountryName = (event) => {
    setNewSearch(event.target.value)
  }

  const filteredCountries = () => {
    if (newSearch) {
      const filtered = listOfCountries.filter(country => {
        return country.name.toLowerCase().includes(newSearch.toLowerCase())
      })
      if (filtered.length > 10) {
        return ['Too many matches... Be more specific']
      } else if (filtered.length <= 10 && filtered.length > 1) {
        return filtered.map(country => {
          return country.name
        })
      } else { // if filtered.length === 1
        return filtered
      }
    } else {
      return []
    }
  }

  return (
    <div>
      find countries: 
      <input
        value={newSearch}
        onChange={typeCountryName} 
        placeholder="type country name..." 
      />
      <Country filteredCountries={filteredCountries} />
    </div>
  )
}

export default App