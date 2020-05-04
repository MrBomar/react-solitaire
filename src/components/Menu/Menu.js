import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.missingLink = this.missingLink.bind(this);
        this.missingFunction = this.missingFunction.bind(this);
    }

    missingLink() {
        alert('Missing Link');
    }

    missingFunction() {
        alert('Missing Function');
    }
    
    render() {
        return(
            <div className='Menu'>
                <MenuButton name='home' action={this.missingLink} openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='undo' action={this.missingFunction} openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='replay' action={this.props.dealReplay} openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='random' action={this.props.dealRandom} openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='solvable' action={this.props.dealSolvable} openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
            </div>
        )
    }
}
