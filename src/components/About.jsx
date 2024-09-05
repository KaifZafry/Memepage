import React, { useContext } from 'react'
import { Lang } from '../utils/langConstants'
import { LangContext } from '../utils/langContext';

const About = () => {
  const { lang } = useContext(LangContext);
  const data= Lang[lang]
  console.log(data)
  console.log(lang)
  return (
    <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-bold'>{data.title}</h2>
        <p>
            {data.desc}
        </p>
        
        <h2 className='text-2xl font-bold mt-4'>{data.title2}</h2>
       <p>{data.desc2}</p>
        

        <p></p>
    </div>
  )
}

export default About