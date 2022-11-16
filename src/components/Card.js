import React from 'react'
import location from '../assets/location.png'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <section className='card--image'>
            <img src={props.item.imageUrl} alt="image" className='card--image'/>
            <div>
                <div>
                    <img src={location}/>
                    <span className='card--country'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="card--geolink">View on Google Maps</a>
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                </div>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p>{props.item.description}</p>
            </div>
        </section>

    </div>
  )
}

export default Card