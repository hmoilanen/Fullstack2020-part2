import React from 'react'

const Country = ({ filteredCountries }) => {
  const theCountry = filteredCountries().length === 1 && typeof filteredCountries()[0] === 'object'
    ? filteredCountries()[0]
    : false
  
  if (theCountry) {
    return (
      <div>
        <h2>{theCountry.name}</h2>
        <br/>
        <div>capital: {theCountry.capital}</div>
        <div>population: {theCountry.population}</div>
        <br/>
        <h4>languages</h4>
        <ul>
          {theCountry.languages.map((language, index) =>
            <li key={index}>{language.name}</li>
          )}
        </ul>
        <img src={theCountry.flag} width="auto" height="100" />
      </div>
    )
  } else {
    return (
      <ul>
        {filteredCountries().map((country, index) =>
          <li key={index}>{country}</li>
        )}
      </ul>
    )
  }
}

export default Country