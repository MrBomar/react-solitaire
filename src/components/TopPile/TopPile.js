import React from 'react';
import Card from '../Card/Card';
import './TopPile.css';

export default class TopPile extends React.Component {
    constructor(props) {
        super(props);
        this.renderCards = this.renderCards.bind(this);
    }

    renderCards() {
        let cards = this.props.cards;
        let cardArray = [];
        for (let i = 0; i < cards.length; i++) {
            cardArray.push(<Card key={cards[i].name} name={cards[i].name} face={cards[i].face} cardIndex={i} topMargin={0} />);
        }
        return cardArray;
    }
    
    render() {
        return (
            <div className='TopPile' id={this.props.name} key={this.props.name}>
            </div>
        );
    }
}