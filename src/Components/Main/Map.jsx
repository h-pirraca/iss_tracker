import React from 'react'

import GoogleMapReact from 'google-map-react'

const MAP_KEY = process.env.REACT_APP_MAP_KEY

const img = <img src = "./iss.svg.png" alt = "iss" style={{height:'40px', width:'40px'}}/>

const SpaceStation = ({ img }) => <div>{img}</div>

class Map extends React.Component{

    state = {
        center: {
            lat: this.props.orbital.latitude,
            lng: this.props.orbital.longitude
        }
    }
    render(){
        console.log(this.state.center);
        return( 
            <div className='map'  style={{height: '75vh', width: '75%', margin: '10px'}}>
                <GoogleMapReact className="map"
                    bootstrapURLKeys={{key: MAP_KEY}}
                    center={{
                        lat: this.props.orbital.latitude,
                        lng: this.props.orbital.longitude
                    }}
                    zoom={1}
                >
                    <SpaceStation
                    lat = {this.props.orbital.latitude}
                    lng = {this.props.orbital.longitude}
                    img = {img}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map