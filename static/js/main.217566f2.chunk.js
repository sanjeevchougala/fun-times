(this["webpackJsonpfun-times"]=this["webpackJsonpfun-times"]||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),l=a(20),i=a.n(l),r=(a(27),a(28),a(4)),c=a(5),d=a(7),b=a(6),u=a(13),o=a(2),h=(a(29),a(0)),j=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("span",{className:"text-muted",children:"Rights reserved"})})}}]),a}(s.Component),m=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"/",className:"navbar-brand",children:"FunOFunTimes"})}),Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{className:"nav-link",to:"/counter",children:"CounterGame"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{className:"nav-link",to:"/tictactoe",children:"Tic-Tac-Toe"})})]})]})})}}]),a}(s.Component),p=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Welcome to fun times!"})})}}]),a}(s.Component),O=a(22),x=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).startGame=function(){e.setState({gameStarted:!0,playingCurrently:e.state.player1,nextPlayer:e.state.player2})},e.resetGame=function(){e.setState({player1status:"Playing..",player2status:"Playing..",playingCurrently:e.state.player1,nextPlayer:e.state.player2,turnCount:1,switchSymOn:!0,itsAgame:!1,board:[{id:1,value:"1",disableCell:!1},{id:2,value:"2",disableCell:!1},{id:3,value:"3",disableCell:!1},{id:4,value:"4",disableCell:!1},{id:5,value:"5",disableCell:!1},{id:6,value:"6",disableCell:!1},{id:7,value:"7",disableCell:!1},{id:8,value:"8",disableCell:!1},{id:9,value:"9",disableCell:!1}],availpos:[1,2,3,4,5,6,7,8,9]})},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.checkforGame=function(){var t=e.state.board.slice(),a=t.filter((function(e){return[1,2,3].includes(e.id)}));return a[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[4,5,6].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[7,8,9].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[1,4,7].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[2,5,8].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[3,6,9].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[1,5,9].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value||(a=t.filter((function(e){return[7,5,3].includes(e.id)})))[0].value===a[1].value&&a[0].value===a[2].value?a[0].value===e.state.player1symbol?"winner-player1":"winner-player2":""},e.updateBoard=function(t){var a=t.target.name;e.setState({board:e.state.board.map((function(t){return t.id==a&&(e.state.turnCount%2?t.value=e.state.player1symbol:t.value=e.state.player2symbol,t.disableCell=!0),console.log("cell_id "+a+" : "+t.value),t})),availpos:e.state.availpos.filter((function(e){return e!=a})),turnCount:e.state.turnCount+1,switchSymOn:!1});var s=e.checkforGame();"winner-player1"===s?e.setState({player1status:"Winner",player2status:""}):"winner-player2"===s&&e.setState({player1status:"",player2status:"Winner"}),9===e.state.turnCount||s?e.setState({board:e.state.board.map((function(e){return e.disableCell=!0,e})),playingCurrently:"",nextPlayer:"",turnCount:"Game Over!",itsAgame:!0}):e.state.turnCount%2?e.setState({playingCurrently:e.state.player2,nextPlayer:e.state.player1}):e.setState({playingCurrently:e.state.player1,nextPlayer:e.state.player2})},e.switchSymbols=function(){var t=e.state.player1symbol,a=e.state.player2symbol;e.setState({player1symbol:a,player2symbol:t})},e.state={players:[{id:1,name:"Player 1",symbol:"X"},{id:2,name:"Player 2",symbol:"O"}],player1:"Player 1",player1symbol:"X",player1status:"Playing..",player2:"Player 2",player2symbol:"O",player2status:"Playing..",playingCurrently:"",nextPlayer:"",turnCount:1,switchSymOn:!0,itsAgame:!1,board:[{id:1,value:"1",disableCell:!1},{id:2,value:"2",disableCell:!1},{id:3,value:"3",disableCell:!1},{id:4,value:"4",disableCell:!1},{id:5,value:"5",disableCell:!1},{id:6,value:"6",disableCell:!1},{id:7,value:"7",disableCell:!1},{id:8,value:"8",disableCell:!1},{id:9,value:"9",disableCell:!1}],availpos:[1,2,3,4,5,6,7,8,9]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-striped table-bordered table-sm",children:[Object(h.jsxs)("thead",{className:"thead-light",children:[Object(h.jsx)("td",{children:"Player Name"}),Object(h.jsx)("td",{children:"Player Symbol"}),Object(h.jsx)("td",{children:"Status"})]}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:["Player 1 : ",Object(h.jsx)("input",{type:"text",name:"player1",value:this.state.player1,onChange:this.handleChange})]}),Object(h.jsx)("td",{children:this.state.player1symbol}),Object(h.jsx)("td",{children:this.state.player1status})]}),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:["Player 2 : ",Object(h.jsx)("input",{type:"text",name:"player2",value:this.state.player2,onChange:this.handleChange})]}),Object(h.jsx)("td",{children:this.state.player2symbol}),Object(h.jsx)("td",{children:this.state.player2status})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:!this.state.gameStarted&&Object(h.jsx)("button",{className:"btn btn-success",onClick:this.startGame,name:"gameStart",children:"Start the Game!"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn btn-success",disabled:!this.state.switchSymOn,onClick:this.switchSymbols,name:"switchSymbols",children:"Switch Symbols"})}),Object(h.jsx)("td",{children:!this.state.itsAgame&&Object(h.jsx)("button",{className:"btn btn-warning",onClick:this.resetGame,name:"resetGame",children:"RESET GAME!"})})]})]})]})}),this.state.gameStarted&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("table",{className:"table table-striped table-bordered table-sm",children:Object(h.jsxs)("tbody",{children:[!this.state.itsAgame&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:["Current Turn :=> ",this.state.turnCount]}),Object(h.jsxs)("td",{className:"info",children:["Next Turn will be for: ",this.state.nextPlayer," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:["Current Turn is for: ",this.state.playingCurrently]}),Object(h.jsx)("td",{children:this.state.availpos.map((function(t){return Object(h.jsx)("button",{className:"btn btn-success",name:t,onClick:e.updateBoard,style:{"font-size":"16px",padding:"10px 20px",width:"20px"},children:t})}))})]})]}),this.state.itsAgame&&Object(h.jsxs)("tr",{children:[" ",Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn btn-info",onClick:this.resetGame,name:"playAgain",children:"Play Again.."})})]})]})}),Object(h.jsxs)("table",{className:"table table-striped table-bordered table-sm",children:[Object(h.jsxs)("thead",{className:"table-info",children:[Object(h.jsx)("th",{children:"TIC"}),Object(h.jsx)("th",{children:"TAC"}),Object(h.jsx)("th",{children:"TOE"})]}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[0].disableCell,className:"btn btn-success",name:this.state.board[0].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[0].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[1].disableCell,className:"btn btn-success",name:this.state.board[1].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[1].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[2].disableCell,className:"btn btn-success",name:this.state.board[2].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[2].value})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[3].disableCell,className:"btn btn-success",name:this.state.board[3].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[3].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[4].disableCell,className:"btn btn-success",name:this.state.board[4].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[4].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[5].disableCell,className:"btn btn-success",name:this.state.board[5].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[5].value})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[6].disableCell,className:"btn btn-success",name:this.state.board[6].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[6].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[7].disableCell,className:"btn btn-success",name:this.state.board[7].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[7].value})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{disabled:this.state.board[8].disableCell,className:"btn btn-success",name:this.state.board[8].id,onClick:this.updateBoard,style:{fontSize:"60px",width:"80px"},children:this.state.board[8].value})})]})]})]})]})]})}}]),a}(s.Component),y=(a(19),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"counter",children:[Object(h.jsxs)("button",{className:"incrementButton",onClick:function(){return e.props.incrementMethod(e.props.by)},children:["+",this.props.by]}),Object(h.jsxs)("button",{className:"decrementButton",onClick:function(){return e.props.decrementMethod(e.props.by)},children:["-",this.props.by]})]})}}]),a}(s.Component));y.defaultProps={by:1};var v=y,f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).increment=function(t){e.setState((function(a){return{counter:e.state.counter+t}}))},e.decrement=function(t){e.setState((function(a){return{counter:e.state.counter-t}}))},e.reset=function(){e.setState({counter:0})},e.state={counter:0},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"counterval",children:this.state.counter})}),Object(h.jsxs)("div",{className:"buttonBlock",children:[Object(h.jsx)(v,{incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:2,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:3,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:4,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:5,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:10,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:100,incrementMethod:this.increment,decrementMethod:this.decrement}),Object(h.jsx)(v,{by:1e3,incrementMethod:this.increment,decrementMethod:this.decrement})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"reset",onClick:this.reset,children:"RESET"})})]})}}]),a}(s.Component),C=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(o.a,{path:"/",exact:!0,component:p}),Object(h.jsx)(o.a,{path:"/tictactoe",component:x}),Object(h.jsx)(o.a,{path:"/counter",component:f}),Object(h.jsx)(j,{})]})})}}]),a}(s.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.217566f2.chunk.js.map