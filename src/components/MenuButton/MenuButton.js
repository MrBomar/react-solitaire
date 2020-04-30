import React from 'react';
import HomeIcon from '../../assets/Icons/HouseIcon';
import ReplayIcon from '../../assets/Icons/ReplayIcon';
import UndoIcon from '../../assets/Icons/UndoIcon';
import RandomIcon from '../../assets/Icons/RandomIcon';
import SolvableIcon from '../../assets/Icons/CheckMarkIcon';
import './MenuButton.css';

export default class MenuButton extends React.Component{
    constructor(props){
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.iconColorPicker = this.iconColorPicker.bind(this);
        this.iconPicker = this.iconPicker.bind(this);
    }

    onMouseEnter() {
        this.props.openButton(this.props.name);
    }

    onMouseOut() {
        this.props.closeButton(this.props.name);
    }

    iconColorPicker(a) {
        if((this.props.state.menu.homeTag && a === 'home') || 
           (this.props.state.menu.undoTag && a === 'undo') ||
           (this.props.state.menu.replayTag && a === 'replay') ||
           (this.props.state.menu.randomTag && a === 'random') ||
           (this.props.state.menu.solvableTag && a === 'solvable')) {
            return 'black';
        } else {
            return 'silver';
        }
    }

    iconPicker() {
        switch(this.props.name){
            case 'home':
                return <HomeIcon openTab={this.onMouseEnter} iconColor={this.iconColorPicker('home')}/>;
            case 'undo':
                return <UndoIcon openTab={this.onMouseEnter} iconColor={this.iconColorPicker('undo')}/>;
            case 'replay':
                return <ReplayIcon openTab={this.onMouseEnter} iconColor={this.iconColorPicker('replay')}/>;
            case 'random':
                return <RandomIcon openTab={this.onMouseEnter} iconColor={this.iconColorPicker('random')}/>;
            default:
                return <SolvableIcon openTab={this.onMouseEnter} iconColor={this.iconColorPicker('solvable')}/>;
        }
    }

    render() {

        return(
            <div className='MenuButton' onMouseOut={this.onMouseOut}>
                {this.iconPicker()}
            </div>
        );
    }
}