import React from 'react'

function Info(props){
    const { copyright, date, explanation } = props
    return(
    <div className='infoContainer'>
        <span className='copyright'>{copyright}</span>
        <span className='date'>{date}</span>
        <p className='text'>{explanation}</p>
    </div>
    )
}

export default Info