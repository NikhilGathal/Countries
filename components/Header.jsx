import React, { useState } from 'react'
import React, { useContext } from 'react'
import { Themecontext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'
export default function Header({theme}) {
  // const [dark,setdark] =  theme
  // const [dark,setdark] = useContext(Themecontext)
  const [dark,setdark] = useTheme()
  // console.log(dark);
  // console.log(localStorage.getItem('isdarkmode'));
 
  return (
    <header className={`header-container ${dark ? 'dark' : ""} `}>
      <div className="header-content">
        <h2 className="title">
          {' '}
          <a href="/">Where in the worlds?</a>{' '}
        </h2>
        <p
          onClick={() =>{
            setdark(!dark)
            localStorage.setItem('isdarkmode' , !dark)
          } }
          className="theme-change"
        >
          <i className={`fa-solid fa-${ dark ? 'sun' : 'moon'}`}></i> &nbsp;&nbsp;
                     {dark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
