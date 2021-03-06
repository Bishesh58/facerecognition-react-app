import React from 'react';


function ImageLinkForm({onInputChange, onButtonSubmit}) {
    return (
        <div>
            <div className='tc ma4'>
                <p className='f3'></p>
                {'This Magic Brain will detech faces in your picture. Give it a try'}
            </div>
           
            <div className='center'>
                <div className='center pa4 br3 shadow-4'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                
                >Detect</button>
                </div>
                
            </div>
        
        </div>
    )
}

export default ImageLinkForm
