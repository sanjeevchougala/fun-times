import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { FooterComponent } from './components/common/FooterComponent'
import { HeaderComponent} from './components/common/HeaderComponent'
import Welcome from  './components/common/Welcome'
import TicTacToe from './components/tictactoe/TicTacToe'
import Counter from './components/counter/Counter'
import ScrabbleComponent from './components/scrabble/ScrabbleComponent'
import DictionaryComponent from './components/scrabble/DictionaryComponent'
import ChowkabarComponent from './components/chowkabara/ChowkabarComponent'

class App extends Component {
    render(){ 
      return (
        <div className="App">
              <Router>
                <HeaderComponent/>
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/tictactoe" component={TicTacToe}></Route>
                <Route path="/counter" component={Counter}/>
                <Route path="/dictionary" component={DictionaryComponent}/>
                <Route path="/scrabble" component={ScrabbleComponent}/>
                <Route path="/chowkabara" component={ChowkabarComponent}/>
                <FooterComponent/>
              </Router>  
          </div> 
      )
    }
}
export default App;
