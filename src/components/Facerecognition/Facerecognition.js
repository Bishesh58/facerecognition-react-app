import React from 'react';
import './Facerecognition.css';

function Facerecognition({imageUrl, box}) {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' src={imageUrl} alt='img' width='500px' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

            </div>
           
            </div>
        </div>
    )
}

export default Facerecognition
