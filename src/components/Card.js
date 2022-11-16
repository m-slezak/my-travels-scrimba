import React from 'react'
import location from '../assets/location.png'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className='card--image'>
            <img src={props.item.imageUrl} alt="image" className='card--image'/>
            <div>
                <div>
                    <img src={location}/>
                    <span className='card--country'>{props.item.location}</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card