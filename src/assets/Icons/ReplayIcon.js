import React from 'react';

export default class ReplayIcon extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.svgSize = this.svgSize.bind(this);
    }

    svgSize() {
        return (window.innerHeight / 5) - 5;
    }
    
    render() {
        return (
            <svg onMouseOver={this.props.openTab} className='ReplayIcon' xmlns="http://www.w3.org/2000/svg" width="50" height={this.svgSize()} viewBox="10 130 290 290" aria-labelledby="title">
                <path d="M162.5625 374.0625 Q135 374.0625 112.9219 362.25 Q90.8438 350.4375 78.1875 333.8438 L90.8438 322.3125 Q101.5312 337.5 121.9219 347.3438 Q142.3125 357.1875 162.5625 357.1875 Q183.9375 357.1875 206.7188 345.6562 Q229.5 334.125 241.0312 311.3438 Q252.5625 288.5625 252.5625 267.1875 Q252.5625 245.8125 241.0312 223.0312 Q229.5 200.25 206.7188 188.7188 Q183.9375 177.1875 162.5625 177.1875 Q142.5938 177.1875 122.9062 186.3281 Q103.2188 195.4688 91.9688 210.5156 Q80.7188 225.5625 75.2344 246.2344 L117.5625 211.5 L63.5625 303.1875 L9.5625 211.5 L56.8125 250.3125 Q60.75 225.8438 74.25 205.7344 Q87.75 185.625 111.2344 172.9688 Q134.7188 160.3125 162.5625 160.3125 Q191.8125 160.3125 216.5625 174.375 Q241.3125 188.4375 255.375 213.1875 Q269.4375 237.9375 269.4375 267.1875 Q269.4375 296.4375 255.375 321.1875 Q241.3125 345.9375 216.5625 360 Q191.8125 374.0625 162.5625 374.0625 Z" stroke={this.props.iconColor} fill={this.props.iconColor} />  
            </svg>
        );
    }
}