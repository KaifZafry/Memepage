import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [lang, setLang]= useState("en");
  console.log(lang)
  return (
    <div className='bg-dark'>
      <ul className='flex justify-around p-4'>
        
      <li><a href="/">Header</a></li>
      <li><a href="/about">About</a></li>
      <li>
        <select className='bg-dark' value={lang} onChange={(e)=> setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
        
        </select></li>
      </ul>
      
    </div>
  )
}

export default Header