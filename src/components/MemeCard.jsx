import React from 'react'

const MemeCard = ({data}) => {
  return (
    <div className='cards'>
        <div className="">
        <img src={data.url} alt={data.title} />
        {/* <h2>{data.title}</h2> */}
        </div>
          
    </div>
  )
}

export default MemeCard