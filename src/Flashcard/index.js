import React, { Component } from 'react';
import '../App.css';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import Note from '../Note/Note';
import NoteForm from '../NoteForm/NoteForm';
import {Route, Switch} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';

import { connect } from 'react-firebase';
import { DB_CONFIG } from '../Config/Firebase/db_config';


class Flashcard extends Component {

  constructor(props){
    super(props);

// flashcard
    this.updateCard = this.updateCard.bind(this);

// firebase
    this.app = firebase;
    this.database = this.app.database().ref().child('cards');

    this.state = {
      cards: [],
      currentCard: {},
    }
  }

componentWillMount(){
  const currentCards = this.state.cards;

  this.database.on('child_added', snap => {
    currentCards.push({
      id: snap.key,
      eng: snap.val().eng,
      han: snap.val().han,
      // pin: snap.val().pin,
    })

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  })

}

getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)]
  return(card);
}

updateCard(){
  console.log("New Card!");
    const currentCards = this.state.cards;
    this.setState({
    currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="flashcard">
        {/* <div className="cardRow"> */}
          <Card eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            // pin={this.state.currentCard.pin}
          />
        {/* </div> */}

        {/* <div className="buttonRow"> */}
        <DrawButton drawCard={this.updateCard}/>
      {/* </div> */}
    </div>

    );
  }
}

export default Flashcard;
