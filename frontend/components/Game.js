import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Board from '../components/Board';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
axios.defaults.withCredentials = true;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            winner: "",
            username: ""
        };
    }

    startGame() {
        axios.post(`${process.env.URL}/createGame`)
      .then((res)=>{
          console.log(res.data);
      })
      .catch(e=>console.log(e));
    }

    createUser(username) {
        axios.post(`${process.env.URL}/createUser`, {
            username: this.state.username
        })
      .then((res)=>{
          console.log(res);
      })
      .catch(e=>console.log(e));
    }

    render() {
        return(
      <div>
        {/* <h1>Battleship Game</h1> */}
        <div className = "container">
        <TextField
              floatingLabelText="Username"
              type="text"
              value={this.state.username}
              onChange={(e)=>(this.setState({username: e.target.value}))}
            />
        <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Create User"
                onClick={this.createUser.bind(this)}
              /><br/>
        <RaisedButton
                className = "center"
                secondary={true}
                style={{margin: '20px'}}
                label = "Start Game"
                onClick={this.startGame.bind(this)}
                    />
        </div>
          <Board />
      </div>);
    }

}

export default Game;
