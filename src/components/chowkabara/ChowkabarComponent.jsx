import React, { Component } from 'react'
import chowkabar from './chowkabar.css'
import ButtonsComponent from './ButtonsComponent'

export default class ChowkabarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            HowToPlay : true,
            playersConfirmed: false,
            gameOn : false,
            roundCnt : 0,
            currentPlayersCnt : 2,
            currentPlayerID : 1,
            alertMessage: '',
            diceNum : '',
            player_1 : { name:'', 
                  id : 1,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : true,
                  numOfMoves : 0,
                  completedPlay: false,
                  dice : '',
                  allow_to_Roll_Dice : true,
                  letTurnforNextPlayer : false,
                  btnsInPalace : 0          
                },
            player_2 : { name:'', 
                  id : 2,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false,
                  dice : '',
                  allow_to_Roll_Dice : false,
                  letTurnforNextPlayer : false,
                  btnsInPalace : 0         
                },
            player_3 : { name:'', 
                  id : 3,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false, 
                  dice : '',
                  allow_to_Roll_Dice : false ,
                  letTurnforNextPlayer : false,
                  btnsInPalace : 0        
                },
            player_4 : { name:'', 
                  iconColor :'',
                  id : 4,
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false, 
                  dice : '',
                  allow_to_Roll_Dice : false,
                  letTurnforNextPlayer : false,
                  btnsInPalace : 0         
                },

            innerCells : [22,23,24,32,34,42,43,44],
            
            p11 : {btnId : 'p11', btnClass: 'player1Btn', playerHome : 'cell13', active : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p12 : {btnId : 'p12', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p13 : {btnId : 'p13', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p14 : {btnId : 'p14', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p21 : {btnId : 'p21', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p22 : {btnId : 'p22', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p23 : {btnId : 'p23', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p24 : {btnId : 'p24', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p31 : {btnId : 'p31', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p32 : {btnId : 'p32', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p33 : {btnId : 'p33', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p34 : {btnId : 'p34', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p41 : {btnId : 'p41', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p42 : {btnId : 'p42', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p43 : {btnId : 'p43', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p44 : {btnId : 'p44', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
           
        }
        
    }

    startTheGame = () => {
        this.setState({gameOn : true})
        this.setTheBoard()
    }  

    setTheBoard = () => {
        this.setState({
            roundCnt : 1,
            diceNum : '',
            player_1 : { ...this.state.player_1, allow_to_Roll_Dice : true,  dice : '', hasPasstoEnterInner : false, letTurnforNextPlayer : false, btnsInPalace : 0},
            player_2 : { ...this.state.player_2, allow_to_Roll_Dice : false, dice : '', hasPasstoEnterInner : false, letTurnforNextPlayer : false, btnsInPalace : 0},
            player_3 : { ...this.state.player_3, allow_to_Roll_Dice : false, dice : '', hasPasstoEnterInner : false, letTurnforNextPlayer : false, btnsInPalace : 0},
            player_4 : { ...this.state.player_4, allow_to_Roll_Dice : false, dice : '', hasPasstoEnterInner : false, letTurnforNextPlayer : false, btnsInPalace : 0},
            p11 : {btnId : 'p11', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p12 : {btnId : 'p12', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p13 : {btnId : 'p13', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p14 : {btnId : 'p14', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            p21 : {btnId : 'p21', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p22 : {btnId : 'p22', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p23 : {btnId : 'p23', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p24 : {btnId : 'p24', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            p31 : {btnId : 'p31', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p32 : {btnId : 'p32', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p33 : {btnId : 'p33', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p34 : {btnId : 'p34', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            p41 : {btnId : 'p41', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p42 : {btnId : 'p42', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p43 : {btnId : 'p43', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            p44 : {btnId : 'p44', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
           
            cell11 : {id : 11, buttons : []},
            cell12 : {id : 12, buttons : []},
            cell13 : {cellMeta : 'Player 1 Home', id : 13, buttons : [this.state.p11, this.state.p12, this.state.p13, this.state.p14]},
            cell14 : {id : 14, buttons : []},
            cell15 : {id : 15, buttons : []},
            cell21 : {id : 21, buttons : []},
            cell22 : {id : 22, buttons : []},
            cell23 : {id : 23, buttons : []},
            cell24 : {id : 24, buttons : []},
            cell25 : {id : 25, buttons : []},
            cell31 : {id : 31, buttons : []},
            cell32 : {id : 32, buttons : []},
            cell33 : {id : 33, buttons : []},
            cell34 : {id : 34, buttons : []},
            cell35 : {id : 35, buttons : []},
            cell41 : {id : 41, buttons : []},
            cell42 : {id : 42, buttons : []},
            cell43 : {id : 43, buttons : []},
            cell44 : {id : 44, buttons : []},
            cell45 : {id : 45, buttons : []},
            cell51 : {id : 51, buttons : []},
            cell52 : {id : 52, buttons : []},
            cell53 : {id : 53, buttons : []},
            cell54 : {id : 54, buttons : []},
            cell55 : {id : 55, buttons : []}
            
        })
        if(!this.state.player_2.completedPlay) {
            this.setState({cell31 : {id : 31, buttons : [this.state.p21, this.state.p22, this.state.p23, this.state.p24]}})
        }
        if(!this.state.player_4.completedPlay) {
            this.setState({cell35 : {id : 35, buttons :[this.state.p41, this.state.p42, this.state.p43, this.state.p44]}})
        }
        if(!this.state.player_3.completedPlay) {
            this.setState({cell53 : {id : 53, buttons :[this.state.p31, this.state.p32, this.state.p33, this.state.p34]}})
        }
        
    }

    resetGame = () => {
        this.setState({playersConfirmed: false, gameOn : false})
        this.setTheBoard()
    }

    checkCompletedPlay = (current_player_id) => {
        if (current_player_id === 1){
            if(this.state.player_1.btnsInPalace === 4){
                this.setState({ player_1 : {...this.state.player_1, completedPlay:true}, alertMessage : "Player 1 finished all buttons"})
            }
        } else if (current_player_id === 2){
            if(this.state.player_2.btnsInPalace === 4){
                this.setState({ player_2 : {...this.state.player_2, completedPlay:true}, alertMessage : "Player 2 finished all buttons"})
            }
        } else if (current_player_id === 3){
            if(this.state.player_3.btnsInPalace === 4){
                this.setState({ player_3 : {...this.state.player_3, completedPlay:true}, alertMessage : "Player 3 finished all buttons"})
            }
        } else if (current_player_id === 4){
            if(this.state.player_4.btnsInPalace === 4){
                this.setState({ player_4 : {...this.state.player_4, completedPlay:true}, alertMessage : "Player 4 finished all buttons"})
            }
        }
        return
    }

    updatePlayer = (e) =>{
        this.setState({[e.target.name] : {...e.target.name, name : e.target.value} })
    }

    confirmPlayers = () => {
        this.setState({alertMessage : ""})
        if(!this.state.player_1.name.length){
            this.setState({alertMessage : "Player 1 is must, please enter Name for player 1"})
            return
        }
        
        if(!this.state.player_2.name.length && !this.state.player_3.name.length && !this.state.player_4.name.length){
            this.setState({alertMessage : "Atleast 2 players Needed"})
            return
        }
        this.setState({player_1 : {...this.state.player_1, playing : true, completedPlay:false}})

        if(!this.state.player_2.name.length){
            this.setState({player_2 : {...this.state.player_2, playing : false, completedPlay:true} ,
                cell31 : {...this.state.cell31, buttons : ''}})
        } else {
            this.setState({player_2 : {...this.state.player_2, playing : true, completedPlay:false}})
        }

        if(!this.state.player_3.name.length){
            this.setState({player_3 : {...this.state.player_3, playing : false, completedPlay:true}})
        } else {
            this.setState({player_3 : {...this.state.player_3, playing : true, completedPlay:false}})
        }

        if(!this.state.player_4.name.length){
            this.setState({player_4 : {...this.state.player_4, playing : false, completedPlay:true}})
        } else {
            this.setState({player_4 : {...this.state.player_4, playing : true, completedPlay:false}})
        }

        this.setState({playersConfirmed : true})
    }

    enableNextPlayer = (currentPlayerId) => {
        this.updatePlayers(currentPlayerId)
        if(currentPlayerId === 1){
            this.setState({ player_1 : {...this.state.player_1, letTurnforNextPlayer : false}})
        } else if(currentPlayerId === 2){
            this.setState({ player_2 : {...this.state.player_2, letTurnforNextPlayer : false}})   
        } else if(currentPlayerId === 3){
            this.setState({ player_3 : {...this.state.player_3, letTurnforNextPlayer : false}})  
        } else if(currentPlayerId === 4){
            this.setState({ player_4 : {...this.state.player_4, letTurnforNextPlayer : false}})
        }    
    }

    updatePlayers = (currentPlayerId) => {
        //set current and next player to enable buttons
        this.checkCompletedPlay(1)
        this.checkCompletedPlay(2)
        this.checkCompletedPlay(3)
        this.checkCompletedPlay(4)

        if(currentPlayerId === 1){
            this.setState({ player_1 : {...this.state.player_1, letTurnforNextPlayer : true}})
            if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("1: next player is player 2")
            } else if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("1:  next player is player 3")
            } else if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("1:  next player is player 4")
            } else {
                this.setState({
                    alertMessage : 'Looks like all other players moved thier buttons to palace: GAME OVER...BEST luck for next game'
                    })
            }
        }
        if(currentPlayerId === 2){
            this.setState({ player_2 : {...this.state.player_2, letTurnforNextPlayer : true}})  

            if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 3")
            } else if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 4")
            } else if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 1")
            }else {
                this.setState({
                    alertMessage : 'Looks like all other players moved thier buttons to palace: GAME OVER...BEST luck for next game'
                    })
            }
        }
        if(currentPlayerId === 3){
            this.setState({ player_3 : {...this.state.player_3, letTurnforNextPlayer : true}})

            if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 4")
            } else if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 1")
            }  else if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 2")
            } else {
                this.setState({
                    alertMessage : 'Looks like all other players moved thier buttons to palace: GAME OVER...BEST luck for next game'
                    })
            }
        }
        if(currentPlayerId === 4){
            this.setState({ player_4 : {...this.state.player_4, letTurnforNextPlayer : true}})

            if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 1")
            }else if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 2")
            } else if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 3")
            } else {
                this.setState({
                    alertMessage : 'Looks like all other players moved thier buttons to palace: GAME OVER...BEST luck for next game'
                    })
            }
        }
    }

    rollAdice = (e) => {
        let random_num = Math.floor(Math.random()*6) + 1
        this.setState({diceNum : random_num})
        if(e.target.name === "player_1Dice"){
            this.setState({ player_1 : {...this.state.player_1, dice: random_num, allow_to_Roll_Dice : false, letTurnforNextPlayer : false},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 p11 : {...this.state.p11, disable : false},
                 p12 : {...this.state.p12, disable : false},
                 p13 : {...this.state.p13, disable : false},
                 p14 : {...this.state.p14, disable : false},
                 currentPlayerID : 1
            })
        } else if(e.target.name === "player_2Dice"){
            this.setState({ player_2 : {...this.state.player_2, dice: random_num, allow_to_Roll_Dice : false, letTurnforNextPlayer : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 p21 : {...this.state.p21, disable : true},
                 p22 : {...this.state.p22, disable : true},
                 p23 : {...this.state.p23, disable : true},
                 p24 : {...this.state.p24, disable : true},
                 currentPlayerID : 2
            })
        } else if(e.target.name === "player_3Dice"){
            this.setState({ player_3 : {...this.state.player_3, dice: random_num, allow_to_Roll_Dice : false, letTurnforNextPlayer : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 p31 : {...this.state.p31, disable : true},
                 p32 : {...this.state.p32, disable : true},
                 p33 : {...this.state.p33, disable : true},
                 p34 : {...this.state.p34, disable : true},
                 currentPlayerID : 3
            })
        } else if(e.target.name === "player_4Dice"){
            this.setState({ player_4 : {...this.state.player_4, dice: random_num, allow_to_Roll_Dice : false, letTurnforNextPlayer : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: '', letTurnforNextPlayer : false},
                 p41 : {...this.state.p41, disable : true},
                 p42 : {...this.state.p42, disable : true},
                 p43 : {...this.state.p43, disable : true},
                 p44 : {...this.state.p44, disable : true},
                 currentPlayerID : 4
            })
        }
    }

    isNextCellhasButtonofThisPlayer = (playerHome_of_btnToBeMoved, next_cell) => {
        if(!(next_cell === "cell13" || next_cell === "cell31" || next_cell === "cell33" || next_cell === "cell35" || next_cell === "cell53") && this.state.[next_cell].buttons.length && this.state.[next_cell].buttons[0].playerHome === playerHome_of_btnToBeMoved){
            return true
        } else {
            return false
        }
    }

    moveMe = (btnToBeMoved, current_cell) => {
        let diceValue = ''
        let next_cell = ''
        let next_cell_id =''
        let next_index_id =''
        let buttonPathtoTraverse = btnToBeMoved.buttonPath
        let playerHome_of_btnToBeMoved = btnToBeMoved.playerHome
        let current_player_id = this.state.currentPlayerID
        this.setState({alertMessage : ''})
        
        console.log("current Player: " + current_player_id)
        this.setState({p11 : {...this.state.p11, btnClass : "playerBtn3"}})
        if(this.state.player_1.dice && current_player_id === 1 && ['p11', 'p12', 'p13' , 'p14'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to move are p11, p12, p13,p14'
                })
            return
        }
        if(this.state.player_2.dice && current_player_id === 2 && ['p21', 'p22', 'p23' , 'p24'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to move are p21, p22, p23,p24'
                })
            return
        }
        if(this.state.player_3.dice && current_player_id === 3 && ['p31', 'p32', 'p33' , 'p34'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to move are p11, p12, p13,p14'
                })
            return
        }
        if(this.state.player_4.dice && current_player_id === 4 && ['p41', 'p42', 'p43' , 'p44'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to move are p41, p42, p43,p44'
                })
            return
        }

        buttonPathtoTraverse.map((cell_id,index) => {
            if (current_cell.id === cell_id){
                let can_enter_inner 
                if(playerHome_of_btnToBeMoved === "cell13") {
                    can_enter_inner = this.state.player_1.hasPasstoEnterInner
                    diceValue = this.state.player_1.dice
                } else if(playerHome_of_btnToBeMoved === "cell31") {
                    can_enter_inner = this.state.player_2.hasPasstoEnterInner
                    diceValue = this.state.player_2.dice
                } else if(playerHome_of_btnToBeMoved === "cell35") {
                    can_enter_inner = this.state.player_4.hasPasstoEnterInner
                    diceValue = this.state.player_4.dice
                } else if(playerHome_of_btnToBeMoved === "cell53") {
                    can_enter_inner = this.state.player_3.hasPasstoEnterInner
                    diceValue = this.state.player_3.dice
                } 

                next_index_id = index + diceValue
                if(next_index_id <= 24 && diceValue){
                    next_cell_id = buttonPathtoTraverse[next_index_id]
                    next_cell = "cell" + next_cell_id
                    
                    if(this.isNextCellhasButtonofThisPlayer(playerHome_of_btnToBeMoved, next_cell)){
                        this.setState({
                            alertMessage : 'You already have a button there, try moving any of your other button or existing button in next cell'
                            })    
                    }  else if(this.state.innerCells.indexOf(next_cell_id)!==-1 && can_enter_inner === false){
                        //check whther next cell is inner cells if so check whether player is allowed to enter inner cells
                        this.setState({
                            alertMessage : 'Sorry, you do not have pass to enter inner loop yet, to enter inner cells you should have sent another player button to his/her homebase atleast once in outer loop. try moving another button. if not let next player to take a turn'
                            }) 
                    } else {
                        //ALL GOOD FOR THE MOVE!
                        this.updatePlayers(current_player_id)

                        this.setState ({ roundCnt : this.state.roundCnt + 1})

                        //btnToBeMoved.inCell = next_cell
                        this.setState({
                            [btnToBeMoved.btnId] : {
                            ...this.state.[btnToBeMoved.btnId], inCell : next_cell
                            }
                        })
                     
                        if(playerHome_of_btnToBeMoved === "cell13") {
                            this.setState({player_1 : {...this.state.player_1, dice: ''} })
                        } else if(playerHome_of_btnToBeMoved === "cell31") {
                            this.setState({player_2 : {...this.state.player_2, dice: ''} })
                        } else if(playerHome_of_btnToBeMoved === "cell35") {
                            this.setState({player_4 : {...this.state.player_4, dice: ''} })
                        } else if(playerHome_of_btnToBeMoved === "cell53") {
                            this.setState({player_3 : {...this.state.player_3, dice: ''} })
                        } 
                        
                        // if next cell is not any of players' Home cell then send the button to corresponding player home cell and you can get pass to enter inner cells
                        if (! (next_cell_id === 13 || next_cell_id === 31 || next_cell_id === 33 || next_cell_id === 35 || next_cell_id === 53) && this.state.[next_cell].buttons.length){
                            let btn_in_next_cell =  this.state.[next_cell].buttons[0]
                            let player_home_cell = btn_in_next_cell.playerHome
                            btn_in_next_cell.inCell = player_home_cell

                            this.setState({
                                btnToBeMoved : {
                                ...this.state.btnToBeMoved,
                                }
                            })

                            this.setState({
                                btn_in_next_cell : {
                                ...this.state.btn_in_next_cell,
                                }
                            })
                            this.state.[next_cell].buttons.splice(0,1)
                            this.state.[player_home_cell].buttons.push(btn_in_next_cell)
                            
                            if(playerHome_of_btnToBeMoved === "cell13" && !this.state.player_1.hasPasstoEnterInner) {
                                this.setState({
                                    player_1 : {...this.state.player_1, hasPasstoEnterInner:true}
                                })
                            } else if(playerHome_of_btnToBeMoved === "cell31" && !this.state.player_2.hasPasstoEnterInner) {
                                this.setState({
                                    player_2 : {...this.state.player_2, hasPasstoEnterInner:true}
                                })
                            } else if(playerHome_of_btnToBeMoved === "cell53" && !this.state.player_3.hasPasstoEnterInner) {
                                this.setState({
                                    player_3 : {...this.state.player_3, hasPasstoEnterInner:true}
                                })
                            } else if(playerHome_of_btnToBeMoved === "cell35" && !this.state.player_4.hasPasstoEnterInner) {
                                this.setState({
                                    player_4 : {...this.state.player_4, hasPasstoEnterInner:true}
                                })
                            } 

                        }
                        
                        //push button to next cell and remove it from current cell
                        this.state.[next_cell].buttons.push(btnToBeMoved)
                        current_cell.buttons.splice(current_cell.buttons.indexOf(btnToBeMoved),1)    
                    }  

                    //check whether all buttons of a player are in Palalce, if so, player completed play
                    if(next_cell==="cell33"){
                        let btnsInPalaceCnt = 0
                        if(playerHome_of_btnToBeMoved === "cell13") {
                            btnsInPalaceCnt = this.state.player_1.btnsInPalace + 1
                            this.setState({player_1 : {...this.state.player_1, btnsInPalace: btnsInPalaceCnt} })
                        } else if(playerHome_of_btnToBeMoved === "cell31") {
                            btnsInPalaceCnt = this.state.player_2.btnsInPalace + 1
                            this.setState({player_2 : {...this.state.player_2, btnsInPalace: btnsInPalaceCnt} })
                        } else if(playerHome_of_btnToBeMoved === "cell35") {
                            btnsInPalaceCnt = this.state.player_4.btnsInPalace + 1
                            this.setState({player_4 : {...this.state.player_4, btnsInPalace: btnsInPalaceCnt} })
                        } else if(playerHome_of_btnToBeMoved === "cell53") {
                            btnsInPalaceCnt = this.state.player_3.btnsInPalace + 1
                            this.setState({player_3 : {...this.state.player_3, btnsInPalace: btnsInPalaceCnt} })
                        }    
                        this.checkCompletedPlay(current_player_id)
                    }

                } else {
                    this.setState({
                        alertMessage : 'Current button cannot be moved. try moving another button, if not let next player to take a turn'
                        }) 
                        this.updatePlayers(current_player_id)
                }
                
            }
        })

        

    }
    // moveMe = (btnToBeMoved) => {
    //     let random_num = Math.floor(Math.random()*4) + 1
    //     let current_cell_id = `${this.state.[btnToBeMoved].inCell}`
    //     let next_cell_id = 0
    //     let next_cell = ''
    //     let current_cell = ''
    //     console.log(btnToBeMoved + " : Button Clicked : " + random_num)
        
    //     console.log ("current_cell_id : " + current_cell_id)
    //     this.state.player_1.buttonPath.map((cell_id,index) => {
    //         if (current_cell_id == cell_id){
    //             console.log("Match found: " + index + " : " + cell_id)
    //             next_cell_id = index+random_num
                
    //             if(next_cell_id <= 23){
    //                 next_cell = "cell" + this.state.player_1.buttonPath[next_cell_id]
    //                 console.log("next_cell: " + next_cell)
    //                 current_cell = "cell" + current_cell_id
    //                 let filteredArray = `${this.state.[current_cell]}`.filter(item => item.btnId !== btnToBeMoved)
    //                 this.setState({[this.state.current_cell]: filteredArray});
                    
    //                         this.state.[next_cell].push(`${this.state.[btnToBeMoved]}`)
    //                         this.setState({[`${this.state.[btnToBeMoved].incell}`] : next_cell})
    //                     console.log("next_cell value: " + [`${this.state.[next_cell].length}`])
    //                     console.log("button inCell value: " + [`${this.state.[btnToBeMoved]}`].incell)
    //                 // this.setState({
    //                 //     [`${this.state.[next_cell]}`] : `${this.state.[btnToBeMoved]}`
    //                 // })                
    //             }
    //         }
    //     })

    // }
    stylePlayerIcons = (event) => {
        let selected_btn = event.target.name
        let btn_class = event.target.className
        if('p1Btn' === selected_btn){
            this.setState({
                p11 : {...this.state.p11, btnClass : btn_class},
                p12 : {...this.state.p12, btnClass : btn_class},
                p13 : {...this.state.p13, btnClass : btn_class},
                p14 : {...this.state.p14, btnClass : btn_class}
            })
        } else if('p2Btn' === selected_btn){
            this.setState({
                p21 : {...this.state.p21, btnClass : btn_class},
                p22 : {...this.state.p22, btnClass : btn_class},
                p23 : {...this.state.p23, btnClass : btn_class},
                p24 : {...this.state.p24, btnClass : btn_class}
            })
        } else if('p3Btn' === selected_btn){
            this.setState({
                p31 : {...this.state.p31, btnClass : btn_class},
                p32 : {...this.state.p32, btnClass : btn_class},
                p33 : {...this.state.p33, btnClass : btn_class},
                p34 : {...this.state.p34, btnClass : btn_class}
            })
        }else if('p4Btn' === selected_btn){
            this.setState({
                p41 : {...this.state.p41, btnClass : btn_class},
                p42 : {...this.state.p42, btnClass : btn_class},
                p43 : {...this.state.p43, btnClass : btn_class},
                p44 : {...this.state.p44, btnClass : btn_class}
            })
        }
    }

    render() {
        return (
            <div>
                <h1>ChowkaBara</h1>
                <table className="table table-bordered table-md">
                            <tbody> 
                                <tr>
                                    <td colSpan="4"> 
                                        <div className="container">
                                            <button className="btn btn-info primary" width="100px" name="howToPlay" onClick={() => {this.setState({HowToPlay : !this.state.HowToPlay})}}>Click me  for - How To Play??</button>
                                            {!this.state.HowToPlay && <div className="alert alert-info">
                                                <span align="left">
                                                    Welcome to ChowkaBar, Its a most fun and family friendly GAME!. And, it's an Educative too for youg ones with soem family fun!
                                                    <p>This game can be enjoyed upto to 4 players, but, minimum of 2 players needed atleast.</p>
                                                    <p><b><u>BOARD: Set Up</u></b></p>
                                                    <ul>
                                                        <li>Board has 5 rows and 5 columns, total of 25 cells</li>
                                                        <li>All outer cells form a outer loop - Traversed in anti-clock wise passion</li>
                                                        <li>Middle cells of first and last rows and columns of baord for Player's base (These cells are marked in <b color="brown">Brown</b>), these cells are safe place for all players to park their button(s)</li>
                                                        <li>Cells bordering centermost cell (cell33) form a inner loop - Traversed in clock wise passion</li>
                                                        <li>Center cell of board (i.e. cell 33) is a central place (Palace - marked in <b color="dark-green">DarkGreen</b>). And, Its final destination for each players' 4 buttons</li>
                                                        <li>All outer cells except players' home cells (i.e cell13, cell31, cell35, cell53) are marked in <b color="lightgreen">LightGreen</b></li>
                                                        <li>Cells bordering center cell (aka Palace) are marked in <b color="lightblue">LightBlue</b> </li>
                                                    </ul>

                                                    <p><b><u>Players: Minimum 2 player needed, Max of 4 players can enjoy this GAME!</u></b> </p>
                                                    <ul>
                                                        <li>Each player get 4 buttons, place all buttons in their home cells to begin the game</li>
                                                        <li>Players take a turn and Roll a Dice and advance a button (of thier choice) to next cell to match Dice value</li>
                                                        <li>Except players's home cells (cell13, cell31, cell35, cell53), if another player's button is in the destination cell, current player occupy that cell by sending another player's button to his/her home cell</li>  
                                                    </ul>

                                                    <p><b><u>RULES:</u></b> </p>
                                                    <ul>
                                                        <li>Each player gets 4 buttons, place them all in homebase cells</li>
                                                        <li>Players take a turn roll a dice</li>
                                                        <li>Each take a turn and roll a dice and move a button (of their choice)</li>
                                                        <li>If there is a button of another player in destination cell, then another player's button will be sent home and current players button parked in that cell</li>
                                                        <li>Next player take a turn, game continues </li>
                                                        <li>Players' each button should complete (traverse) outer loop to enter into inner loop </li>
                                                        <li>Player can enter into inner loop from previous cell of their home base</li>
                                                        <li>To enter inner loop, player should have sent at least once another player's button while traversing outer loop</li>
                                                        <li>Once player button completes inner loop (ending next cell to their homebase for e.g. player 1 - Homebase is 13, and inncer loop ends at cell23) then button can enter the Palace</li>
                                                        <li>There will be situations (many times) during the game that player won't be able to move a button, player has to let their turn to next player (for this provided "Let Next Player GO" button provided) </li>
                                                        <li>Each player has to move all 4 buttons to Palace to complete the game</li>
                                                        <li>Last player who don't moves all his/her button to palace lose the GAME!</li>
                                                    </ul>
                                                </span>
                                                </div>
                                            }
                                        </div>
                                    </td>
                                </tr>    
                                {!this.state.playersConfirmed && <div>
                                    <tr>
                                        <td colSpan="4"><div className="alert alert-warning">Confirm at least 2 players to start the game!</div></td>
                                    </tr>    
                                    <tr>
                                        <td className="palyerSide">
                                            Player 1 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_1"/>
                                        </td>
                                        <td>Choose Icon Style: 
                                            <button className="btn btn-success playerBtn1" name="p1Btn" onClick={this.stylePlayerIcons}>p11</button>
                                            <button className="btn btn-success playerBtn2" name="p1Btn" onClick={this.stylePlayerIcons}>p12</button>
                                            <button className="btn btn-success playerBtn3" name="p1Btn" onClick={this.stylePlayerIcons}>p13</button>
                                            <button className="btn btn-success playerBtn4" name="p1Btn" onClick={this.stylePlayerIcons}>p14</button>
                                        </td>
                                        
                                        <td className="palyerSide">
                                            Player 2 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_2"/>
                                        </td>
                                        <td>Choose Icon Style: 
                                            <button className="btn btn-success playerBtn1" name="p2Btn" onClick={this.stylePlayerIcons}>p21</button>
                                            <button className="btn btn-success playerBtn2" name="p2Btn" onClick={this.stylePlayerIcons}>p22</button>
                                            <button className="btn btn-success playerBtn3" name="p2Btn" onClick={this.stylePlayerIcons}>p23</button>
                                            <button className="btn btn-success playerBtn4" name="p2Btn" onClick={this.stylePlayerIcons}>p24</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4"> 
                                            <div className="container">
                                                <button className="btn btn-info primary" width="100px" name="have3Players" onClick={() => {this.setState({currentPlayersCnt : 3})}}>Click me if 3 players</button>    
                                                <button className="btn btn-info primary" width="100px" name="have4Players" onClick={() => {this.setState({currentPlayersCnt : 4})}}>Click me if 4 players</button>  
                                            </div>
                                        </td>
                                    </tr>
                                    {(this.state.currentPlayersCnt > 2) && <div>
                                        <tr>
                                            <td className="palyerSide">
                                                Player 3 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_3"/>  
                                            </td>
                                            <td>Choose Icon Style: 
                                                <button className="btn btn-success playerBtn1" name="p3Btn" onClick={this.stylePlayerIcons}>p31</button>
                                                <button className="btn btn-success playerBtn2" name="p3Btn" onClick={this.stylePlayerIcons}>p32</button>
                                                <button className="btn btn-success playerBtn3" name="p3Btn" onClick={this.stylePlayerIcons}>p33</button>
                                                <button className="btn btn-success playerBtn4" name="p3Btn" onClick={this.stylePlayerIcons}>p34</button>
                                            </td>
                                            {(this.state.currentPlayersCnt > 3) && <div>
                                                <td className="palyerSide">
                                                    Player 4 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_4"/>
                                                </td>
                                                <td>Choose Icon Style: 
                                                    <button className="btn btn-success playerBtn1" name="p4Btn" onClick={this.stylePlayerIcons}>p41</button>
                                                    <button className="btn btn-success playerBtn2" name="p4Btn" onClick={this.stylePlayerIcons}>p42</button>
                                                    <button className="btn btn-success playerBtn3" name="p4Btn" onClick={this.stylePlayerIcons}>p43</button>
                                                    <button className="btn btn-success playerBtn4" name="p4Btn" onClick={this.stylePlayerIcons}>p44</button>
                                                </td>
                                            </div>
                                            }
                                            {(this.state.currentPlayersCnt === 3) &&  <td colSpan="2"></td>}
                                        </tr>
                                    </div>
                                    }  
                                </div>
                                }        
                            </tbody>
                </table>

                {!this.state.gameOn && <div>
                    <button className="btn btn-success" name="confirmPlayers" onClick={this.confirmPlayers} disabled = {this.state.playersConfirmed}>Confirm Players</button>
                    {this.state.playersConfirmed && <button className="btn btn-success" name="startGame" onClick={this.startTheGame} disabled = {this.state.gameOn}>start the Game!</button>}
                    </div>
                }
                {this.state.alertMessage && <div className="alert alert-warning">{this.state.alertMessage}</div>}
                {this.state.gameOn && <div responsive="true">

                        <table className="table table-bordered table-md">
                            <tbody>
                                <tr name="outerRow1"> 
                                    <td className="cornerCell"></td>
                                    <td className="palyerSide" colSpan="5"> 
                                        PLAYER 1: {this.state.player_1.name} {this.state.player_1.dice && <div className="alert alert-info">Dice Rolled Value was {this.state.player_1.dice}</div>}
                                        { this.state.player_1.allow_to_Roll_Dice && <div>
                                                <button className="btn btn-success diceBtn fas fa-dice-3" name="player_1Dice" onClick={this.rollAdice} disabled = {!this.state.player_1.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_1.dice}</button>
                                            </div>
                                        } 
                                        <button className="btn btn-primary" name="letTurnforNextPlayer1" onClick={() => {this.enableNextPlayer(1)}} disabled = {!this.state.player_1.letTurnforNextPlayer}> Let Next Player GO!</button>  
                                    </td> 

                                    <td className="cornerCell"></td>
                                </tr>
                                <tr name="row1">
                                    <td rowSpan="5" className="player2Side" >
                                       {this.state.player_2.playing && <div>
                                                PLAYER 2:  {this.state.player_2.name} {this.state.player_2.dice && <div className="alert alert-info">Dice Rolled Value was {this.state.player_2.dice}</div>}
                                                { this.state.player_2.allow_to_Roll_Dice && <div >
                                                    <button className="btn btn-success diceBtn" name="player_2Dice" onClick={this.rollAdice} disabled = {!this.state.player_2.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_2.dice}</button>
                                                    </div>
                                                }
                                                <button className="btn btn-primary" name="letTurnforNextPlayer2" onClick={() => {this.enableNextPlayer(2)}} disabled = {!this.state.player_2.letTurnforNextPlayer}> Let Next Player GO!</button>
                                            </div> 
                                        }
                                        </td>
                                    <td className="outerCell" name="cell11"><ButtonsComponent currentCell={this.state.cell11} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell12"><ButtonsComponent currentCell={this.state.cell12} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player1Home" name="cell13"><ButtonsComponent currentCell={this.state.cell13} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell14"><ButtonsComponent currentCell={this.state.cell14} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell15"><ButtonsComponent currentCell={this.state.cell15} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player4Side" rowSpan="5">
                                    {this.state.player_4.playing && <div> 
                                            PLAYER 4: {this.state.player_4.name} {this.state.player_4.dice && <div className="alert alert-info">Dice Rolled Value was {this.state.player_4.dice}</div>}
                                            { this.state.player_4.allow_to_Roll_Dice && <div>
                                                    <button className="btn btn-success diceBtn" name="player_4Dice" onClick={this.rollAdice} disabled = {!this.state.player_4.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_4.dice}</button><br/>
                                                </div>
                                            }
                                                <button className="btn btn-primary" name="letTurnforNextPlayer4" onClick={() => {this.enableNextPlayer(4)}} disabled = {!this.state.player_4.letTurnforNextPlayer}> Let Next Player GO!</button>
                                        </div>
                                    }
                                    </td>
                                </tr>
                                <tr name="row2">
                                    <td className="outerCell" name="cell21"><ButtonsComponent currentCell={this.state.cell21} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell22"><ButtonsComponent currentCell={this.state.cell22} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell23"><ButtonsComponent currentCell={this.state.cell23} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell24"><ButtonsComponent currentCell={this.state.cell24} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell25"><ButtonsComponent currentCell={this.state.cell25} moveMe={this.moveMe}></ButtonsComponent></td>
                                </tr>
                                <tr name="row3">
                                    <td className="player2Home" name="cell31"><ButtonsComponent currentCell={this.state.cell31} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell32"><ButtonsComponent currentCell={this.state.cell32} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="palaceHouse" name="cell33"><ButtonsComponent currentCell={this.state.cell33} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell34"><ButtonsComponent currentCell={this.state.cell34} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player4Home" name="cell35"><ButtonsComponent currentCell={this.state.cell35} moveMe={this.moveMe}></ButtonsComponent></td>
                                </tr>
                                <tr name="row4">
                                    <td className="outerCell" name="cell41"><ButtonsComponent currentCell={this.state.cell41} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell42"><ButtonsComponent currentCell={this.state.cell42} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell43"><ButtonsComponent currentCell={this.state.cell43} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="innerCell" name="cell44"><ButtonsComponent currentCell={this.state.cell44} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell45"><ButtonsComponent currentCell={this.state.cell45} moveMe={this.moveMe}></ButtonsComponent></td>
                                </tr>
                                <tr name="row5">
                                    <td className="outerCell" name="cell51"><ButtonsComponent currentCell={this.state.cell51} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell52"><ButtonsComponent currentCell={this.state.cell52} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player3Home" name="cell53"><ButtonsComponent currentCell={this.state.cell53} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell54"><ButtonsComponent currentCell={this.state.cell54} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell55"><ButtonsComponent currentCell={this.state.cell55} moveMe={this.moveMe}></ButtonsComponent></td>
                                </tr>
                                <tr name="outerRow2"> 
                                    <td className="cornerCell"></td>
                                    <td className="palyerSide" colSpan="5"> 
                                        {this.state.player_3.playing && <div> 
                                                PLAYER 3: {this.state.player_3.name}{this.state.player_3.dice && <div className="alert alert-info">Dice Rolled Value was {this.state.player_3.dice}</div>}
                                                { this.state.player_3.allow_to_Roll_Dice && <div>
                                                        <button className="btn btn-success diceBtn" name="player_3Dice" onClick={this.rollAdice} disabled = {!this.state.player_3.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_3.dice}</button>
                                                    </div>
                                                }
                                                    <button className="btn btn-primary" name="letTurnforNextPlayer3" onClick={() => {this.enableNextPlayer(3)}} disabled = {!this.state.player_3.letTurnforNextPlayer}> Let Next Player GO!</button>
                                            </div>
                                        }
                                    </td>
                                    <td className="cornerCell"></td>
                                </tr>
                            </tbody>
                        </table>                   
                        
                        <button className="btn btn-warning" name="resetGame" onClick={this.resetGame} disabled = {!this.state.gameOn}>Reset the Game!</button>
                        
                    </div>
                }
            </div>
        )
    }
}
