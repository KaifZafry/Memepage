import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard'

const Hero = () => {
const [memeData, setMemeData] = useState([])
    useEffect(() => {
        fetchData()
        window.addEventListener('scroll',handlescroll)

        return () => {
            window.removeEventListener('scroll', handlescroll)
        }   
    }, [])  // Fetch memes when component mounts and updates

const handlescroll = () => {
    if(window.scrollY+ window.innerHeight>= document.body.scrollHeight){
        console.log("srolled to the bottom of the document now next data will reload")
        fetchData() // Fetch more memes when user scrolls to the bottom of the page
    }
   
}

    const fetchData = async () => {
        // Fetch 20 more memes from the API
        const data = await fetch('https://meme-api.com/gimme/20')
        const json = await data.json()
       
        
        setMemeData((memeData) =>[...memeData, ...json.memes])
    }
  return (
    <div className='flex'>
        {
            memeData?.map((meme,index)=>{
                return <MemeCard key={index} data={meme} /> 
                 // Render MemeCard component for each meme in the array
            })
        }
        
    </div>
  )
}

export default Hero