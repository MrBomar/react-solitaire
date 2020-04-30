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
            <svg onMouseOver={this.props.openTab} className='HouseIcon' xmlns="http://www.w3.org/2000/svg" width="50" height={this.svgSize()} viewBox="5 245 150 150" aria-labelledby="title">>
                <path d="M143.4375 378.9844 L14.625 378.9844 L14.625 289.9688 L79.1719 245.9531 L143.4375 289.9688 L143.4375 378.9844 ZM129.6562 365.2031 L129.6562 297.1406 L79.1719 262.5469 L28.5469 297.1406 L28.5469 365.2031 L129.6562 365.2031 Z" stroke="none" fill={this.props.iconColor} />
            </svg>
        );
    };
}