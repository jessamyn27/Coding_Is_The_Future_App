import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import {Route, Switch} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';

import { connect } from 'react-firebase';
import { DB_CONFIG } from './Config/Firebase/db_config';


class App extends Component {

  constructor(props){
    super(props);
// to do
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
// flashcard
    // this.updateCard = this.updateCard.bind(this);

// firebase
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');

    this.state = {
      // cards: [],
      // currentCard: {},
      notes: [],
    }
  }

  // notes
  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">My Super Sweet To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}



// componentWillMount(){
//   const currentCards = this.state.cards;
//
//   this.database.on('child_added', snap => {
//     currentCards.push({
//       id: snap.key,
//       eng: snap.val().eng,
//       han: snap.val().han,
//       pin: snap.val().pin,
//     })
//
//     this.setState({
//       cards: currentCards,
//       currentCard: this.getRandomCard(currentCards)
//     })
//   })
//
// }
//
// getRandomCard(currentCards){
//   var card = currentCards[Math.floor(Math.random() * currentCards.length)]
//   return(card);
// }
//
// updateCard(){
//   // console.log("New Card!");
//     const currentCards = this.state.cards;
//     this.setState({
//     currentCard: this.getRandomCard(currentCards)
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="cardRow">
//           <Card eng={this.state.currentCard.eng}
//             han={this.state.currentCard.han}
//             pin={this.state.currentCard.pin}
//           />
//         </div>
//         <div className="buttonRow">
//         <DrawButton drawCard={this.updateCard}/>
//       </div>
//     </div>
//
//     );
//   }
// }

export default App;
