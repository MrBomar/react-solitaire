import React from 'react';
import Menu from './components/Menu/Menu';
import GameBoard from './components/GameBoard/GameBoard';
import MenuTag from './components/MenuTag/MenuTag';
import './Solitaire.css';

export default class Solitaire extends React.Component {
  constructor(){
    super();
    this.state = {
      menu: {
        homeTag: false,
        undoTag: false,
        replayTag: false,
        randomTag: false,
        solvableTag: false, 
      }
    };
    this.closeButton = this.closeButton.bind(this);
    this.openButton = this.openButton.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  closeButton(tagID) {
    switch(tagID) {
      case 'home':
        this.setState({ menu: {homeTag: false}});
        break;
      case 'undo':
        this.setState({ menu: {undoTag: false}});
        break;
      case 'replay':
        this.setState({ menu: {replayTag: false}});
        break;
      case 'random':
        this.setState({ menu: {randomTag: false}});
        break;
      case 'solvable':
        this.setState({ menu: {solvableTag: false}});
        break;
      default:
        this.setState({ menu: { homeTag: false, undoTag: false, replayTag: false, randomTag: false, solvableTag: false}});
    }
  }

  openButton(tagID) {
    switch(tagID) {
      case 'home':
        this.setState({ menu: { homeTag: true, undoTag: false, replayTag: false, randomTag: false, solvableTag: false}});
        break;
      case 'undo':
        this.setState({ menu: { homeTag: false, undoTag: true, replayTag: false, randomTag: false, solvableTag: false}});
        break;
      case 'replay':
        this.setState({ menu: { homeTag: false, undoTag: false, replayTag: true, randomTag: false, solvableTag: false}});
        break;
      case 'random':
        this.setState({ menu: { homeTag: false, undoTag: false, replayTag: false, randomTag: true, solvableTag: false}});
        break;
      case 'solvable':
        this.setState({ menu: { homeTag: false, undoTag: false, replayTag: false, randomTag: false, solvableTag: true}});
        break;
      default:
        this.setState({ menu: { homeTag: false, undoTag: false, replayTag: false, randomTag: false, solvableTag: false}});
    }
  }

  renderTags() {
    if(this.state.menu.homeTag) {
      return <MenuTag id='home' text='Return to Home Page' />
    } else if(this.state.menu.undoTag) {
      return <MenuTag id='undo' text='Undo Previous Move' />
    } else if(this.state.menu.replayTag) {
      return <MenuTag id='replay' text='Replay the Current Game' />
    } else if(this.state.menu.randomTag) {
      return <MenuTag id='random' text='New Game: Random Deck' />
    } else if(this.state.menu.solvableTag) {
      return <MenuTag id='solvable' text='New Game: Solvable Deck' />
    }
  }

  render(){
    return(
      <div className="Solitaire">
        <Menu openButton={this.openButton} closeButton={this.closeButton} state={this.state}/>
        {this.renderTags()}
        <GameBoard />
      </div>
    );
  }
};
