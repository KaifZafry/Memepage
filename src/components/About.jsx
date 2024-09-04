import React from 'react'
import { Lang } from '../utils/langConstants'

const About = () => {
  return (
    <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-bold'>{Lang.en.title}</h2>
        <p>
            {Lang.en.desc}
        </p>
        
        <h2 className='text-2xl font-bold mt-4'>{Lang.en.title2}</h2>
       <p>{Lang.en.desc2}</p>
        

        <p></p>
    </div>
  )
}

export default About