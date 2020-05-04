import React from 'react';
import Foundation from '../Foundation/Foundation';
import TopPile from '../TopPile/TopPile';
import Tableau from '../Tableau/Tableau';
import './GameBoard.css';

export default class GameBoard extends React.Component {

    render() {

        return (
            <div className='GameBoard'>
                <Foundation name='Spade' cards={this.props.spadeFoundationCards} suite='S' />
                <Foundation name='Club' cards={this.props.clubFoundationCards} suite='C' />
                <Foundation name='Diamond' cards={this.props.diamondFoundationCards} suite='D' />
                <Foundation name='Heart' cards={this.props.heartFoundationCards} suite='H' />
                <TopPile name='Stock' cards={this.props.stockCards} />
                <TopPile name='Talon' cards={this.props.talonCards} />
                <Tableau name='Tableau1' cards={this.props.tableau1Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau2' cards={this.props.tableau2Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau3' cards={this.props.tableau3Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau4' cards={this.props.tableau4Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau5' cards={this.props.tableau5Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau6' cards={this.props.tableau6Cards} orientation={this.props.orientation} />
                <Tableau name='Tableau7' cards={this.props.tableau7Cards} orientation={this.props.orientation} />
            </div>
        );
    }
}