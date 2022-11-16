import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className='card--image'>
            <img src={props.item.imageUrl} alt="image"/>
            <div>
                <h1>content</h1>
            </div>
        </div>

    </div>
  )
}

export default Card