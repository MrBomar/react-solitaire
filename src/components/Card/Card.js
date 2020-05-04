import React from 'react';
import { ToFaceValue, ToSymbol } from '../../logic/Conversions';
import './Card.css';

export default class Card extends React.Component {
    //Card name is a 2 character-length name
    //First character indicates suite
    //Second character indicates value
    //Value is passed as a letter, use FromAlpha() to get numeric value, use ToSymbol to get the proper symbol

    constructor(props) {
        super(props);
        this.value = this.props.name.charAt(1);
        this.suite = this.props.name.charAt(0);
        this.cardClass = this.cardClass.bind(this);
    }

    cardClass() {
        let face = (this.props.face)?'CardFace ':'CardBack ';
        return 'Card ' + face + this.suite;
    }

    render() {
        return(
            <div className={this.cardClass()} id={this.props.name} key={this.props.name} style={{zIndex: this.props.cardIndex, marginTop: this.props.topMargin}}>
                <h2 className="CardTopLeft">{ToFaceValue(this.value)}</h2>
                <h2 className="CardTopRight">{ToSymbol(this.suite)}</h2>
                <h1 className="CardMiddle">{ToSymbol(this.suite)}</h1>
                <h2 className="CardBottomLeft">{ToSymbol(this.suite)}</h2>
                <h2 className="CardBottomRight">{ToFaceValue(this.value)}</h2>
            </div>
        );
    }
}