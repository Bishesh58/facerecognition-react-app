import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png'

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br4 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                  <img alt='logo' src={logo} style={{padding:'9px 4px 0px 9px'}}/> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
