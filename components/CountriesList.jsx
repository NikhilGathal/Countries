import React, { useState } from 'react'
// import countriesdata from '../data'
import CountryCard from './CountryCard'
import React, { useEffect, useState } from 'react'
import CountriesListShimmer from './CountriesListShimmer'
export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
// console.log(countriesData);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])

  // useEffect(() => console.log('hi'))

  // const filter = countriesdata.filter((country) => {
  //   return country.name.common.toLowerCase().includes('')
  // })

  // console.log(filter)

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) => {
            return  country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
          })
          .map((country, i) => {
            return (
              <CountryCard
                key={i}
                name={country.name.common}
                population={country.population.toLocaleString('en-IN')}
                region={country.region}
                capital={country.capital?.join(', ')}
                flag={country.flags.svg}
                data={country}
              />
            )
          })}
      </div>
    </>
  )


}
