
import React, { Component } from 'react'
import  words from './words-list.json'
import  words_list from './words-list-dictionary'

export default class ScrabbleComponent extends Component {
    constructor(){
        super()
        this.state = {
            random_word : words_list[Math.floor(Math.random() * words_list.length)]
        }
    }
    
    getAWord = () => {
        this.setState( {
            random_word : words_list[Math.floor(Math.random() * words_list.length)]
        })
    }
    render() {
        return (
            <div>   
                <h1> The Word is: {this.state.random_word.word}</h1>
               <button className="btn btn-info" name= "randomWord" onClick={this.getAWord}style={{"fontSize": "10px", "padding": "10px 10px", width: "100px"}}>Get A Random Word!</button>
            
               <table className='table table-striped table-bordered table-sm'>
                    <thead className='table-dark'>
                        <td>Word</td>
                        <td>Type</td>
                        <td>Definition</td>
                    </thead>
                    <tbody>
                         <tr><td>{this.state.random_word.word}</td> <td>{this.state.random_word.pos}</td> <td>{this.state.random_word.definitions}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
