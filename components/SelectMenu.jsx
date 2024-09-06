import React from 'react'

export default function SelectMenu({setquery}) {
  return (
    <select className="filter-by-region " onChange={ (e) => 
    
      {
        if(e.target.value === 'Filter by Region')
          setquery('')
        else
        {
          setquery(e.target.value.toLowerCase()) 
        }
       
      }
    }>
    
    
    <option hidden>Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
  )
}

