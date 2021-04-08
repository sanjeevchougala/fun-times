import React, { Component } from 'react'

export default class ButtonsComponent extends Component {
    
    render() {
        return (
            
            Array.from({length:this.props.currentCell.buttons.length}).map(
                (_, arrindex) => (<button className={`btn btn-success  ${this.props.currentCell.buttons[arrindex].btnClass}`} name={this.props.currentCell.buttons[arrindex]} onClick={() => this.props.moveMe(this.props.currentCell.buttons[arrindex],this.props.currentCell)}>{this.props.currentCell.buttons[arrindex].btnId}</button>)   
            )
        )
    }
}
