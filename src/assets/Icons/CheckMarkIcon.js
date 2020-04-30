import React from 'react';

export default class HouseIcon extends React.Component { 
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
            <svg onMouseOver={this.props.openTab} className='CheckMarkIcon' xmlns="http://www.w3.org/2000/svg" width="50" height={this.svgSize()} viewBox="-30 170 275 275" aria-labelledby="title">>
                <path d="M67.3594 347.3438 Q80.2969 317.8125 95.1328 290.8828 Q109.9688 263.9531 125.7188 241.1719 Q144.2812 214.4531 154.9688 202.6406 Q161.8594 195.0469 167.9062 190.125 Q171.4219 187.3125 179.0156 185.9062 Q197.4375 182.5312 204.75 182.5312 Q207.9844 182.5312 207.9844 184.7812 Q207.9844 186.8906 204.75 189.8438 Q176.625 214.875 145.7578 261.4219 Q114.8906 307.9688 93.6562 360.2812 Q85.6406 379.8281 82.4766 384.2578 Q79.3125 388.6875 62.7188 388.6875 Q51.8906 388.6875 49.1484 386.5781 Q46.4062 384.4688 39.2344 373.2188 Q26.8594 354.5156 12.6562 339.4688 Q5.2031 331.5938 5.2031 327.375 Q5.2031 321.4688 13.5 315.7734 Q21.7969 310.0781 27.1406 310.0781 Q34.5938 310.0781 45.0703 318.4453 Q55.5469 326.8125 67.3594 347.3438 Z" stroke="none" fill={this.props.iconColor} />
            </svg>
        );
    };
}