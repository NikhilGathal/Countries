
import React from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {Themecontext, ThemeProvider } from './contexts/ThemeContext'
export default function App() {
  
  return (
  
    <ThemeProvider>
    <Header  />
    <Outlet />
 </ThemeProvider> 
  
    
  )
}
