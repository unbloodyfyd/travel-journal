import React from "react";
import locationlogo from "../images/location-logo.png"


export default function Card(props) {
  return (
      <div className="card">
        <div>
        <img src={props.item.imageUrl} alt="photo" className="card-img"/>
        </div>
        <div className="card-text-info">
        <p className="card-firstpara"> <img src={locationlogo} className="location-logo"/> 
        <span className="card-location">{props.item.location}</span> 
        
        <a href={props.item.googleMapsUrl} className="card-maps">View on Google Maps</a>
        </p>
        <p className="card-title">{props.item.title}</p>
        <p className="card-date">{props.item.startDate} {props.item.endDate}</p>
        <p className="card-description">{props.item.description}</p>

        </div>
        <div>
        <hr className="hr"/>
        </div>
      </div>
  )
}