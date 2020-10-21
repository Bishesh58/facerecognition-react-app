import React from 'react'

const Rank =({username, entries})=> {
    return (
        <div className='center'>
            <div className='white f3'>
                {`${username}, your current entry count is #`}
            </div>

            <div className='white f3'>
                {entries}
            </div>
        </div>
    )
}

export default Rank
