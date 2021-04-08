import React, { Component } from 'react'
import chowkabar from './chowkabar.css'
import ButtonsComponent from './ButtonsComponent'

export default class ChowkabarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            playersConfirmed: false,
            gameOn : false,
            roundCnt : 0,
            currentPlayersCnt : 1,
            currentPlayerID : 1,
            alertMessage: '',
            player_1 : { name:'', 
                  id : 1,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : true,
                  numOfMoves : 0,
                  completedPlay: false,
                  dice : '',
                  allow_to_Roll_Dice : true          
                },
            player_2 : { name:'', 
                  id : 2,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false,
                  dice : '',
                  allow_to_Roll_Dice : false
                },
            player_3 : { name:'', 
                  id : 3,
                  iconColor :'',
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false, 
                  dice : '',
                  allow_to_Roll_Dice : false 
                },
            player_4 : { name:'', 
                  iconColor :'',
                  id : 4,
                  hasPasstoEnterInner : false,
                  playing : false,
                  numOfMoves : 0,
                  completedPlay: false, 
                  dice : '' ,
                  allow_to_Roll_Dice : false 
                },

            innerCells : [22,23,24,32,34,42,43,44],
            
            b11 : {btnId : 'b11', btnClass: 'player1Btn', playerHome : 'cell13', active : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b12 : {btnId : 'b12', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b13 : {btnId : 'b13', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b14 : {btnId : 'b14', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b21 : {btnId : 'b21', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b22 : {btnId : 'b22', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b23 : {btnId : 'b23', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b24 : {btnId : 'b24', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b31 : {btnId : 'b31', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b32 : {btnId : 'b32', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b33 : {btnId : 'b33', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b34 : {btnId : 'b34', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b41 : {btnId : 'b41', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b42 : {btnId : 'b42', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b43 : {btnId : 'b43', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b44 : {btnId : 'b44', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
           
        }
        
    }

    startTheGame = () => {
        this.setState({gameOn : true})
        this.setTheBoard()
    }  

    setTheBoard = () => {
        this.setState({
            roundCnt : 1,
            player_1 : { ...this.state.player_1, allow_to_Roll_Dice : true,  hasPasstoEnterInner : false},
            player_2 : { ...this.state.player_2, allow_to_Roll_Dice : false, hasPasstoEnterInner : false},
            player_3 : { ...this.state.player_3, allow_to_Roll_Dice : false, hasPasstoEnterInner : false},
            player_4 : { ...this.state.player_4, allow_to_Roll_Dice : false, hasPasstoEnterInner : false},
            b11 : {btnId : 'b11', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b12 : {btnId : 'b12', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b13 : {btnId : 'b13', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b14 : {btnId : 'b14', btnClass: 'player1Btn', playerHome : 'cell13', disable : true, inCell : 'cell13', buttonPath : [13,12,11,21,31,41,51,52,53,54,55,45,35,25,15,14,24,34,44,43,42,32,22,23,33]},
            b21 : {btnId : 'b21', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b22 : {btnId : 'b22', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b23 : {btnId : 'b23', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b24 : {btnId : 'b24', btnClass: 'player2Btn', playerHome : 'cell31', disable : true, inCell : 'cell31', buttonPath : [31,41,51,52,53,54,55,45,35,25,15,14,13,12,11,21,22,23,24,34,44,43,42,32,33]},
            b31 : {btnId : 'b31', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b32 : {btnId : 'b32', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b33 : {btnId : 'b33', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b34 : {btnId : 'b34', btnClass: 'player3Btn', playerHome : 'cell53', disable : true, inCell : 'cell53', buttonPath : [53,54,55,45,35,25,15,14,13,12,11,21,31,41,51,52,42,32,22,23,24,34,44,43,33]},
            b41 : {btnId : 'b41', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b42 : {btnId : 'b42', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b43 : {btnId : 'b43', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
            b44 : {btnId : 'b44', btnClass: 'player4Btn', playerHome : 'cell35', disable : true, inCell : 'cell35', buttonPath : [35,25,15,14,13,12,11,21,31,41,51,52,53,54,55,45,44,43,42,32,22,23,24,34,33]},
           
            cell11 : {id : 11, buttons : []},
            cell12 : {id : 12, buttons : []},
            cell13 : {id : 13, buttons : [this.state.b11, this.state.b12, this.state.b13, this.state.b14]},
            cell14 : {id : 14, buttons : []},
            cell15 : {id : 15, buttons : []},
            cell21 : {id : 21, buttons : []},
            cell22 : {id : 22, buttons : []},
            cell23 : {id : 23, buttons : []},
            cell24 : {id : 24, buttons : []},
            cell25 : {id : 25, buttons : []},
            cell31 : {id : 31, buttons :[this.state.b21, this.state.b22, this.state.b23, this.state.b24]},
            cell32 : {id : 32, buttons : []},
            cell33 : {id : 33, buttons : []},
            cell34 : {id : 34, buttons : []},
            cell35 : {id : 35, buttons :[this.state.b41, this.state.b42, this.state.b43, this.state.b44]},
            cell41 : {id : 41, buttons : []},
            cell42 : {id : 42, buttons : []},
            cell43 : {id : 43, buttons : []},
            cell44 : {id : 44, buttons : []},
            cell45 : {id : 45, buttons : []},
            cell51 : {id : 51, buttons : []},
            cell52 : {id : 52, buttons : []},
            cell53 : {id : 53, buttons :[this.state.b31, this.state.b32, this.state.b33, this.state.b34]},
            cell54 : {id : 54, buttons : []},
            cell55 : {id : 55, buttons : []}
            
        })
   
    }

    resetGame = () => {
        this.setState({playersConfirmed: false, gameOn : false})
        this.setTheBoard()
    }

    checkCompletedPlay = (current_player_id) => {
        if (current_player_id === 1){
            if(this.state.b11.inCell==='cell33' && this.state.b12.inCell==='cell33' && this.state.b13.inCell==='cell33' && this.state.b14.inCell==='cell33'){
                this.setState({ player_1 : {...this.state.player_1, completedPlay:true}})
            }
        }
        if (current_player_id === 2){
            if(this.state.b21.inCell==='cell33' && this.state.b22.inCell==='cell33' && this.state.b23.inCell==='cell33' && this.state.b24.inCell==='cell33'){
                this.setState({ player_2 : {...this.state.player_2, completedPlay:true}})
            }
        }
        if (current_player_id === 3){
            if(this.state.b31.inCell==='cell33' && this.state.b32.inCell==='cell33' && this.state.b33.inCell==='cell33' && this.state.b34.inCell==='cell33'){
                this.setState({ player_3 : {...this.state.player_3, completedPlay:true}})
            }
        }
        if (current_player_id === 4){
            if(this.state.b41.inCell==='cell33' && this.state.b42.inCell==='cell33' && this.state.b43.inCell==='cell33' && this.state.b44.inCell==='cell33'){
                this.setState({ player_4 : {...this.state.player_4, completedPlay:true}})
            }
        }
        return
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
        this.setState({player_1 : {...this.state.player_1, completedPlay:false}})

        if(!this.state.player_2.name.length){
            this.setState({player_2 : {...this.state.player_2, completedPlay:true}})
        } else {
            this.setState({player_2 : {...this.state.player_2, completedPlay:false}})
        }

        if(!this.state.player_3.name.length){
            this.setState({player_3 : {...this.state.player_3, completedPlay:true}})
        } else {
            this.setState({player_3 : {...this.state.player_3, completedPlay:false}})
        }

        if(!this.state.player_4.name.length){
            this.setState({player_4 : {...this.state.player_4, completedPlay:true}})
        } else {
            this.setState({player_4 : {...this.state.player_4, completedPlay:false}})
        }

        this.setState({playersConfirmed : true})
        console.log("Hello confirming the players : " + this.state.playersConfirmed)  
    }

    updatePlayer = (e) => {
       
        
            this.setState({ [e.target.name] : {...e.target.name, name: e.target.value, playing: true}})
            // if(!this.state.[e.target.name].name.match(/^[0-9a-zA-Z]+$/)) {
            //     this.setState({alertMessage : "only characters allowed are a-z, A-Z, 0-9"})
            //     this.setState({ [e.target.name] : {...e.target.name, name: '', playing: false}, alertMessage:''})
            // }
    }

    updatePlayers = (currentPlayerId) => {
        //set current and next player to enable buttons
            console.log("updating next player")
            console.log("Player 1 completion status" + this.state.player_1.completedPlay)
            console.log("Player 2 completion status" + this.state.player_2.completedPlay)
            console.log("Player 3 completion status" + this.state.player_3.completedPlay)
            console.log("Player 4 completion status" + this.state.player_4.completedPlay)

        if(currentPlayerId === 1){
            if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("1: next player is player 2")
            } else if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("1:  next player is player 3")
            } else if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("1:  next player is player 4")
            }
        }
        if(currentPlayerId === 2){
            if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 3")
            } else if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 4")
            } else if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("2:  next player is player 1")
            }
        }
        if(currentPlayerId === 3){
            if(!this.state.player_4.completedPlay){
                this.setState({ player_4 : {...this.state.player_4, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 4")
            } else if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 1")
            }  else if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("3:  next player is player 2")
            } 
        }
        if(currentPlayerId === 4){
            if(!this.state.player_1.completedPlay){
                this.setState({ player_1 : {...this.state.player_1, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 1")
            }else if(!this.state.player_2.completedPlay){
                this.setState({ player_2 : {...this.state.player_2, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 2")
            } else if(!this.state.player_3.completedPlay){
                this.setState({ player_3 : {...this.state.player_3, allow_to_Roll_Dice : true}})
                console.log("4:  next player is player 3")
            } 
        }
    }

    rollAdice = (e) => {
        let random_num = Math.floor(Math.random()*6) + 1
        if(e.target.name === "player_1Dice"){
            this.setState({ player_1 : {...this.state.player_1, dice: random_num, allow_to_Roll_Dice : false},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: ''},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: ''},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: ''},
                 b11 : {...this.state.b11, disable : false},
                 b12 : {...this.state.b12, disable : false},
                 b13 : {...this.state.b13, disable : false},
                 b14 : {...this.state.b14, disable : false},
                 currentPlayerID : 1
            })
        } else if(e.target.name === "player_2Dice"){
            this.setState({ player_2 : {...this.state.player_2, dice: random_num, allow_to_Roll_Dice : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: ''},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: ''},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: ''},
                 b21 : {...this.state.b21, disable : true},
                 b22 : {...this.state.b22, disable : true},
                 b23 : {...this.state.b23, disable : true},
                 b24 : {...this.state.b24, disable : true},
                 currentPlayerID : 2
            })
        } else if(e.target.name === "player_3Dice"){
            this.setState({ player_3 : {...this.state.player_3, dice: random_num, allow_to_Roll_Dice : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: ''},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: ''},
                 player_4 : {...this.state.player_4, allow_to_Roll_Dice : false, dice: ''},
                 b31 : {...this.state.b31, disable : true},
                 b32 : {...this.state.b32, disable : true},
                 b33 : {...this.state.b33, disable : true},
                 b34 : {...this.state.b34, disable : true},
                 currentPlayerID : 3
            })
        } else if(e.target.name === "player_4Dice"){
            this.setState({ player_4 : {...this.state.player_4, dice: random_num, allow_to_Roll_Dice : false},
                 player_1 : {...this.state.player_1, allow_to_Roll_Dice : false, dice: ''},
                 player_3 : {...this.state.player_3, allow_to_Roll_Dice : false, dice: ''},
                 player_2 : {...this.state.player_2, allow_to_Roll_Dice : false, dice: ''},
                 b41 : {...this.state.b41, disable : true},
                 b42 : {...this.state.b42, disable : true},
                 b43 : {...this.state.b43, disable : true},
                 b44 : {...this.state.b44, disable : true},
                 currentPlayerID : 4
            })
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

        if(current_player_id === 1 && ['b11', 'b12', 'b13' , 'b14'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to clicks are b11, b12, b13,b14'
                })
            return
        }
        if(current_player_id === 2 && ['b21', 'b22', 'b23' , 'b24'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to clicks are b21, b22, b23,b24'
                })
            return
        }
        if(current_player_id === 3 && ['b31', 'b32', 'b33' , 'b34'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to clicks are b11, b12, b13,b14'
                })
            return
        }
        if(current_player_id === 4 && ['b41', 'b42', 'b43' , 'b44'].indexOf(btnToBeMoved.btnId) === -1){
            this.setState({
                alertMessage : 'Only buttons allowed to clicks are b41, b42, b43,b44'
                })
            return
        }

        buttonPathtoTraverse.map((cell_id,index) => {
            if (current_cell.id === cell_id){
                console.log("Match found: " + index + " : " + cell_id)

                let can_enter_inner 
                if(playerHome_of_btnToBeMoved === "cell13") {
                    can_enter_inner = this.state.player_1.hasPasstoEnterInner
                    diceValue = this.state.player_1.dice
                } else if(playerHome_of_btnToBeMoved === "cell31") {
                    can_enter_inner = this.state.player_2.hasPasstoEnterInner
                    diceValue = this.state.player_2.dice
                } else if(playerHome_of_btnToBeMoved === "cell35") {
                    can_enter_inner = this.state.player_3.hasPasstoEnterInner
                    diceValue = this.state.player_3.dice
                } else if(playerHome_of_btnToBeMoved === "cell53") {
                    can_enter_inner = this.state.player_4.hasPasstoEnterInner
                    diceValue = this.state.player_4.dice
                } 

                next_index_id = index + diceValue
                console.log(btnToBeMoved.btnId + " : Button Clicked and it is in cell : " + btnToBeMoved.inCell + "random #: " + diceValue)

                if(next_index_id <= 24){
                    next_cell_id = buttonPathtoTraverse[next_index_id]
                    next_cell = "cell" + next_cell_id
                    console.log("next_cell: " + next_cell)
                    
                    //check whther next cell is inner cells if so check whether player is allowed to enter inner cells
     
                    if(this.state.innerCells.indexOf(next_cell_id)!==-1 && can_enter_inner === false){
                        console.log("has pass to enter inner cell FROM :" + can_enter_inner)
                        this.setState({
                            alertMessage : 'Sorry, you do not have pass to enter inner cells yet, to enter inner cells you shoul have ate another player button atleast once. try moving another button. if not let next player to take a turn'
                            }) 
                    } else {
                        //ALL GOOD FOR THE MOVE!
                        console.log("going to update next player now")
                        this.updatePlayers(current_player_id)

                        this.setState ({ roundCnt : this.state.roundCnt + 1})

                        btnToBeMoved.inCell = next_cell
                        this.setState({
                            btnToBeMoved : {
                            ...this.state.btnToBeMoved,
                            }
                        })
                        
                        // if next cell is not any of players' Home cell then send the button to corresponding player home cell and you can get pass to enter inner cells
                        if (! (next_cell_id === 13 || next_cell_id === 31 || next_cell_id === 35 || next_cell_id === 53) && this.state.[next_cell].buttons.length){
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
                    if(next_cell==="cell33"){this.checkCompletedPlay(current_player_id)}
                } else {
                    this.setState({
                        alertMessage : 'Current button cannot be moved. try moving another button, if not let next player to take a turn'
                        }) 
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
   
    render() {
        return (
            <div>
                <h1>ChowkaBara</h1>
                {!this.state.playersConfirmed && <div className="alert alert-warning">Confirm Players to start the game</div>}
                <table className="table table-bordered table-md">
                            <tbody> 
                                <tr>
                                    <td>
                                        Player 1 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_1"/>
                                    </td>
                                    <td>
                                        Player 2 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Player 3 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_3"/>  
                                    </td>
                                    <td>
                                        Player 4 Name: <input type="text" disable={this.state.playersConfirmed} onChange={this.updatePlayer} name="player_4"/>
                                    </td>
                                </tr>
                            </tbody>
                </table>
                {!this.state.gameOn && <div>
                    <button className="btn btn-success" name="confirmPlayers" onClick={this.confirmPlayers} disabled = {this.state.playersConfirmed}>Confirm Players</button>
                    {this.state.playersConfirmed && <button className="btn btn-success" name="startGame" onClick={this.startTheGame} disabled = {this.state.gameOn}>start the Game!</button>}
                    </div>
                }
                {this.state.alertMessage && <div className="alert alert-warning">{this.state.alertMessage}</div>}
                {this.state.gameOn && <div responsive={true}>
                        <table className="table table-bordered table-md">
                            <tbody>
                                <tr name="outerRow1"> 
                                    <td className="cornerCell"></td>
                                    <td className="palyerSide" colSpan="5"> 
                                        PLAYER {this.state.player_1.name} Side
                                        <button className="btn btn-success" name="player_1Dice" onClick={this.rollAdice} disabled = {!this.state.player_1.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_1.dice}</button>
                                    </td> 
                                    <td className="cornerCell"></td>
                                </tr>
                                <tr name="row1">
                                    <td rowSpan="5" className="player2Side" >
                                        PLAYER {this.state.player_2.name} Side
                                        <button className="btn btn-success" name="player_2Dice" onClick={this.rollAdice} disabled = {!this.state.player_2.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_2.dice}</button>
                                    </td>
                                    <td className="outerCell" name="cell11"><ButtonsComponent currentCell={this.state.cell11} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell12"><ButtonsComponent currentCell={this.state.cell12} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player1Home" name="cell13"><ButtonsComponent currentCell={this.state.cell13} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell14"><ButtonsComponent currentCell={this.state.cell14} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="outerCell" name="cell15"><ButtonsComponent currentCell={this.state.cell15} moveMe={this.moveMe}></ButtonsComponent></td>
                                    <td className="player4Side" rowSpan="5">
                                        PLAYER {this.state.player_4.name} Side
                                        <button className="btn btn-success" name="player_4Dice" onClick={this.rollAdice} disabled = {!this.state.player_4.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_4.dice}</button>
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
                                        PLAYER {this.state.player_3.name} Side
                                        <button className="btn btn-success" name="player_3Dice" onClick={this.rollAdice} disabled = {!this.state.player_3.allow_to_Roll_Dice}>Roll A Dice : {this.state.player_3.dice}</button>
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
