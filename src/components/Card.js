import React from 'react'
import location from '../assets/location.png'

const Card = (props) => {
    console.log(props)
  return (
    <section className='card'>
        <div className='card--container'>
            <div className='card--image_container'>
                 <img src={props.item.imageUrl} alt="image" className='card--image'/>
            </div>

            <div className='card--properties'>
                <div>
                    <img src={location} className="card--location_img"/>
                    <span className='card--country'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="card--geolink">View on Google Maps</a>
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                </div>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p className='card--description'>{props.item.description}</p>
            </div>
        </div>
    </section>
  )
}

export default Card