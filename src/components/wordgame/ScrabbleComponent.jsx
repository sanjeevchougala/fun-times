import React, { Component } from 'react'

export default class ScrabbleComponent extends Component {
    constructor(){
        super()
        this.state = {
            words : '',
            random_word : {word : 'TO-DAY', pos : 'n.', definitions : 'The present day. today. On to-day Is worth for me a thousand yesterdays. Longfellow.'}, //words_list[Math.floor(Math.random() * words_list.length)],
            //random_word : words_list[Math.floor(Math.random() * words_list.length)],
            wordsFetched :  [{word : 'TO-DAY', pos : 'adv.', definitions : 'On this day; on the present day. Worcester\'s horse came but to-day. Shak..'},
                             {word : 'TO-DAY', pos : 'n.', definitions : 'The present day. today. On to-day Is worth for me a thousand yesterdays. Longfellow.'}],
            //matched_word : {word : 'TO-DAY', pos : 'n.', definitions : 'The present day. today. On to-day Is worth for me a thousand yesterdays. Longfellow.'},
            textToSearch : 'TO-DAY',
            limitWords : 0,
            showcopyrightmsg : true
        }
    }
    
    getAWord = () => {
        this.setState( {
            //random_word : words_list[Math.floor(Math.random() * words_list.length)]
            random_word : this.state.words[Math.floor(Math.random() * this.state.words.length)] 
        })
    }

    handleChange = (e) => {
        this.setState( {
            textToSearch : e.target.value
        })
    }

    componentDidMount =() =>{
        this.getMoviesFromApiAsync()
    }

    getMoviesFromApiAsync = () => fetch('https://sanjeevchougala.github.io/DataInputs//words-list-dictionary.json')
    .then((response) => response.json())
    .then((responseJson) => { console.log(responseJson)
       this.setState({ words : responseJson });
    })
    .catch((error) => {
       console.error(error);
    })

    fetchWords= (e) => {
        this.setState({
            //wordsFetched : words_list.filter((item) => (item.word.includes(this.state.textToSearch.toUpperCase())))
            wordsFetched : this.state.words.filter((item) => (item.word.includes(this.state.textToSearch.toUpperCase()))),
            matched_word : this.state.words.filter((item) => (item.word == (this.state.textToSearch.toUpperCase())))
        })
    }


    render() {
        return (
            <div>  
                <button className="btn btn-info btnfullwindowwidth" name= "copyrtmessage" onClick={ () => {this.setState({showcopyrightmsg : !this.state.showcopyrightmsg})}}>copyright message</button>
               
                { this.state.showcopyrightmsg && <div className='container-info'> 
                    <span> Words and definitions soruced from WebstersDictionary on GitHub
                            Copyright 2018 Vivian Silva

                            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </span>
                </div>
                }
                <h1> Word is: {this.state.random_word.word}</h1>

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
                To search a word => Change <input onChange={this.handleChange} value={this.state.textToSearch}/>{this.state.textToSearch.length && <button className="btn btn-info" name= "searchWord" onClick={this.fetchWords}style={{"fontSize": "10px", "padding": "10px 10px", width: "100px"}}>Search</button>}
                <table className='table table-striped table-bordered table-sm'> 
                    <thead className='table-dark'>
                        <td>Word</td>
                        <td>Type</td>
                        <td>Definition</td>
                    </thead>
                    <tbody>
                        {/* {this.state.limitWords} */}
                        {/* {this.state.matched_word.word && <tr key={'000'}><td>{this.state.matched_word.word}</td> <td>{this.state.matched_word.pos}</td> <td>{this.state.matched_word.definitions}</td></tr>} */}
                        {this.state.wordsFetched.length && this.state.wordsFetched.slice(0,this.state.wordsFetched.length).map((w) => <tr key={Math.random()* this.state.wordsFetched.length}><td>{w.word}</td> <td>{w.pos}</td> <td>{w.definitions}</td></tr>)}
                    </tbody>
                </table>

                {/* DO NOT NEED THIS <button className="btn btn-info" name= "fetchfromGit" onClick={this.getMoviesFromApiAsync}style={{"fontSize": "10px", "padding": "10px 10px", width: "100px"}}>Fetch Words</button> */}
            </div>

            
        )
    }
}
