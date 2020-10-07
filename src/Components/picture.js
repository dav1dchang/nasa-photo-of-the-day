import React from 'react'

function Picture(props){
    const { source } = props
    return (
    <div className='nasaPhoto'>    
        <img src = { source } alt='Nasa photo of the day'></img>
    </div>        
    )
}

export default Picture
