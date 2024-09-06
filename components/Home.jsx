import React from 'react'
import CountriesList from './CountriesList'
import React, {  useState } from 'react'
import SearchBar from './/SearchBar'
import SelectMenu from './/SelectMenu'
import { usewindowsize } from '../hooks/usewindowsize'
import { useTheme } from '../hooks/useTheme'
export default function Home() {
  // console.log("rendered home");
  const windowSize = usewindowsize()

  const [query, setquery] = useState('')
  // const [dark] = useOutletContext()

  // const [dark] = useContext(Themecontext)

  const [dark] = useTheme()


  return (
    <main className={` ${dark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setquery={setquery} />
        <SelectMenu   setquery={setquery} />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
