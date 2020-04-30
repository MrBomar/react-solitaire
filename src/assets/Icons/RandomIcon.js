import React from 'react';

export default class RandomIcon extends React.Component {
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
            <svg onMouseOver={this.props.openTab} className='RandomIcon' xmlns="http://www.w3.org/2000/svg" height={this.svgSize()} width="50" viewBox="-5 150 280 280" aria-labelledby="title">
                <path d="M247.3594 236.25 L195.0469 282.6562 L195.0469 254.3906 Q193.7812 254.6719 192.375 254.6719 Q191.3906 254.6719 189.6328 254.5312 Q187.875 254.3906 186.8906 254.3906 Q174.9375 254.3906 167.0625 261.1406 Q165.2344 262.6875 150.3281 278.5781 Q139.5 290.1094 117.8438 313.4531 Q110.1094 322.5938 93.5156 339.6094 Q90 342.7031 80.0156 347.3438 Q69.4688 352.2656 65.5312 352.2656 L11.5312 352.2656 L11.5312 314.8594 L61.5938 314.8594 Q71.2969 314.8594 87.1875 298.5469 Q98.1562 286.4531 108.9844 274.2188 Q123.0469 258.1875 152.8594 227.8125 Q164.25 217.5469 178.4531 217.5469 Q179.5781 217.5469 181.8984 217.7578 Q184.2188 217.9688 185.3438 217.9688 Q188.1562 217.9688 194.9062 217.6875 L194.9062 189.2812 L247.3594 236.25 ZM247.3594 333.5625 L194.9062 379.8281 L194.9062 351.5625 L172.8281 351.5625 Q172.6875 351.5625 167.4844 349.875 Q156.375 346.2188 146.1094 336.2344 Q137.6719 326.6719 129.0938 317.1094 L151.1719 293.2031 Q170.5781 315.4219 186.3281 315.4219 Q187.7344 315.4219 190.4766 315.1406 Q193.2188 314.8594 194.3438 314.8594 Q194.9062 313.5938 194.9062 310.5 Q194.9062 305.8594 194.4844 286.5938 L247.3594 333.5625 ZM113.3438 252.7031 L92.6719 276.75 Q88.1719 272.3906 79.1719 263.6719 Q69.6094 254.9531 61.0312 254.9531 L11.5312 254.9531 L11.5312 217.5469 L66.2344 217.5469 Q66.9375 217.5469 72.9844 219.375 Q84.9375 223.0312 95.625 232.875 Q99.9844 237.0938 113.3438 252.7031 Z" stroke='none' fill={this.props.iconColor} />
            </svg>
        );
    }
}