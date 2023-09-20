import React from 'react'
import "./data.css"

const Data = ({orbital}) => {
    const issLat = orbital.latitude;
    const issLng = orbital.longitude;
    const issVel = orbital.velocity;
    const issAlt = orbital.altitude;
    const issVis = orbital.visibility;

    return (
    <div className='info'>
        <div className='info-card'>
            <h3>Orbital ISS Data</h3>
            {issLat > 0 ? (
                <p>Latitude: {Number(issLat).toFixed(2)} ° N</p>
            ) : (
                <p>Latitude: {(Number(issLat) * -1).toFixed(2)} ° S</p>
            )}
            {issLng > 0 ? (
                <p>Longitude: {Number(issLng).toFixed(2)} ° E</p>
            ) : (
                <p>Longitude: {(Number(issLng) * -1).toFixed(2)} ° W</p>
            )}
            <p>Velocity: {Number(issVel).toFixed(2)} KM/H</p>
            <p>Altitude: {Number(issAlt).toFixed(2)} KM</p>
            
        </div>
    </div>
    )
}

export default Data