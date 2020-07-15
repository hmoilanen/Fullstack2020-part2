import React from 'react'

const Country = ({ filteredCountries, setNewSearch }) => {
  const theCountry = filteredCountries().length === 1 && typeof filteredCountries()[0] === 'object'
    ? filteredCountries()[0]
    : false

  const showcaseCountry = (country) => {
    setNewSearch(country)
  }
  
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
        <img
          src={theCountry.flag}
          alt={theCountry.name}
          width="auto"
          height="100"
        />
      </div>
    )
  } else {
    return (
      <ul>
        {filteredCountries().map((country, index) =>
          <li key={index}>
            <span>{country}</span>
            { country === 'Too many matches... Be more specific'
              ? null
              : <button onClick={() => showcaseCountry(country)}>show</button>
            }
          </li>
        )}
      </ul>
    )
  }
}

export default Country