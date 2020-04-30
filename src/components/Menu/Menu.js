import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.children = ["Button1","Button2","Button3","Button4"];
    }
    
    render() {
        return(
            <div className='Menu'>
                <MenuButton name='home' openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='undo' openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='replay' openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='random' openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
                <MenuButton name='solvable' openButton={this.props.openButton} closeButton={this.props.closeButton} state={this.props.state}/>
            </div>
        )
    }
}
