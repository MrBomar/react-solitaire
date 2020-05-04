import React from 'react';
import Card from '../Card/Card';
import {cardHeight} from '../../logic/Properties';
import './Tableau.css';

export default class Tableau extends React.Component {
    constructor(props) {
        super(props);
        this.renderCards = this.renderCards.bind(this);
    }

    renderCards(){
        let cards = this.props.cards;
        let cardArray = [];
        let topMargin = 0;
        for (let i = 0; i < cards.length; i++) {
            cardArray.push(<Card key={cards[i].name} name={cards[i].name} face={cards[i].face} cardIndex={i} topMargin={topMargin} />);
            let baseMargin = cardHeight(this.props.orientation) / 4;
            topMargin += (cards[i].face)? baseMargin : baseMargin / 2;
        }
        return cardArray;
    }

    render() {
        return(
            <div className='Tableau' id={this.props.name} key={this.props.name}>
                {this.renderCards()}
            </div>
        );
    }
}