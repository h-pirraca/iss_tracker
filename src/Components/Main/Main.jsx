import React from 'react'
import Data from './Data';
import Map from './Map';

import './main.css'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            orbData: {},
            zoom: 1
        }
    }

    componentDidMount(){
        this.getCoordinates();
        this.interval = setInterval(this.getCoordinates, 3000);
    }

    getCoordinates = () => {
        fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => this.setState({orbData: data}));
    }

    render() {
        return (        
            <div className='main'>
                <Data orbital={this.state.orbData}/>
                <Map orbital={this.state.orbData}/>
            </div>
        );
    }

}

export default Main