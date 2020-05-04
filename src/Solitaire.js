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
			},
			orientation: 'landscape',
			stockCards: [],
			talonCards: [],
			spadeFoundationCards: [],
			clubFoundationCards: [],
			heartFoundationCards: [],
			diamondFoundationCards: [],
			tableau1Cards: [],
			tableau2Cards: [],
			tableau3Cards: [],
			tableau4Cards: [],
			tableau5Cards: [],
			tableau6Cards: [],
			tableau7Cards: []
		};
		this.closeButton = this.closeButton.bind(this);
		this.dealRandom = this.dealRandom.bind(this);
		this.dealReplay = this.dealReplay.bind(this);
		this.dealSolvable = this.dealSolvable.bind(this);
		this.openButton = this.openButton.bind(this);
		this.renderTags = this.renderTags.bind(this);
		this.orientationChange = this.orientationChange.bind(this);
	}

	dealRandom() {

	}

	dealReplay() {

	}

	dealSolvable() {
		this.setState({
			stockCards: [{name: 'SA', face: true}],
			talonCards: [{name: 'SA', face: true}],
			spadeFoundationCards: [{name: 'SA', face: true}],
			clubFoundationCards: [{name: 'SA', face: true}],
			heartFoundationCards: [{name: 'SA', face: true}],
			diamondFoundationCards: [{name: 'SA', face: true}],
			tableau1Cards: [{name: 'SA', face: true}],
			tableau2Cards: [{name: 'SA', face: true}],
			tableau3Cards: [{name: 'SA', face: true}],
			tableau4Cards: [{name: 'SA', face: true}],
			tableau5Cards: [{name: 'SA', face: true}],
			tableau6Cards: [{name: 'SA', face: true}],
			tableau7Cards: [{name: 'SA', face: true}]
		})
	}

	orientationChange() {
		if(window.innerHeight > window.innerWidth) {
			this.setState({orientation: 'portrait'});
		} else if(window.innerHeight < window.innerWidth) {
			this.setState({orientation: 'landscape'});
		}
	}

	componentDidMount() {
		this.orientationChange();
		window.addEventListener('resize', this.orientationChange.bind(this));
		window.addEventListener('orientationchange', this.orientationChange.bind(this));
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

	render() {

		return(
			<div className="Solitaire">
				<Menu
					openButton={this.openButton}
					closeButton={this.closeButton}
					state={this.state}
					dealReplay={this.dealReplay}
					dealRandom={this.dealRandom}
					dealSolvable={this.dealSolvable}
				/>
				{this.renderTags()}
				<GameBoard
					orientation={this.state.orientation}
					stockCards={this.state.stockCards}
					talonCards={this.state.talonCards}
					spadeFoundationCards={this.state.spadeFoundationCards}
					clubFoundationCards={this.state.clubFoundationCards}
					heartFoundationCard={this.state.heartFoundationCards}
					diamondFoundationCards={this.state.diamondFoundationCards}
					tableau1Cards={this.state.tableau1Cards}
					tableau2Cards={this.state.tableau2Cards}
					tableau3Cards={this.state.tableau3Cards}
					tableau4Cards={this.state.tableau4Cards}
					tableau5Cards={this.state.tableau5Cards}
					tableau6Cards={this.state.tableau6Cards}
					tableau7Cards={this.state.tableau7Cards}
				/>
			</div>
		);
	}
};
