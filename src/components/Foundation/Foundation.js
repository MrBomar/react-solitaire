import React from 'react';
import { ToSymbol } from '../../logic/Conversions';
import './Foundation.css';

export default class Foundation extends React.Component {
    render() {
        return (
            <h1 id={this.props.name} className={'Foundation Symbol'} key={this.props.name}>
                {ToSymbol(this.props.suite)}
            </h1>
        );
    }
}