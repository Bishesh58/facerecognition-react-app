import React from 'react'

function Facerecognition({imageUrl}) {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img src={imageUrl} alt='img' width='500px' height='auto'/>
            </div>
            
        </div>
    )
}

export default Facerecognition
