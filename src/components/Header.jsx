import React, { useContext } from 'react';
import { LangContext } from '../utils/langContext';

const Header = () => {
  // Accessing lang and setLang from LangContext using useContext
  const { lang, setLang } = useContext(LangContext);

  const handleLangChange = (event) => {
    setLang(event.target.value); // Update the lang value in the context
    console.log(event.target.value + " changed");
  };

  return (
    <div className='bg-dark'>
      <ul className='flex justify-around p-4'>
        <img src="./assets/" alt=""/>
        <li><a href="/">Header</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <select className='bg-dark' value={lang} onChange={handleLangChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ru">Russia</option>
            <option value="hi">Hindi</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Header;
