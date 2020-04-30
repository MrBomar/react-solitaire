import React from 'react';

export default class UndoIcon extends React.Component {
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
            <svg onMouseOver={this.props.openTab} className='UndoIcon' xmlns="http://www.w3.org/2000/svg" width="50" height={this.svgSize()} viewBox="5 200 200 200" aria-labelledby="title">>
                <path d="M183.7969 323.4375 L169.875 323.4375 Q169.875 293.2031 152.6484 274.8516 Q135.4219 256.5 107.7188 256.5 Q87.75 256.5 72.6328 266.3438 Q57.5156 276.1875 50.3438 294.3281 L79.4531 299.25 L19.2656 333.7031 L19.2656 264.375 L38.25 287.4375 Q46.9688 265.7812 65.1797 254.25 Q83.3906 242.7188 107.7188 242.7188 Q141.75 242.7188 162.7734 264.7969 Q183.7969 286.875 183.7969 323.4375 Z" stroke={this.props.iconColor} fill={this.props.iconColor} />
            </svg>
        );
    };
}