//In the React environment if you import a css file, it is applied to the component when rendered
import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

//ECMASCRIPT6 Javascript Class...
class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    addNote() {
        let notes = this.state.notes;
        //Instead of creating a note with a generic title and body, we will transfer responsiblity to setting up the note to Note.js
        //We will create one property to track the node
        notes.push(
            {
                id: Date.now()
            }
        );
        this.setState(
            {
                notes: this.state.notes
            }
        );
    }

    deleteNote(id) {
        let newNoteArray = this.state.notes;
        for (let i = 0; i < newNoteArray.length; i++) {
            if (newNoteArray[i].id === id) {
                newNoteArray.splice(i,1);
                break;
            }
        }
        this.setState({
            notes: newNoteArray
        })
    }

    render() {
        return (
            <div>
                <div id='nav'>
                    <h1 id='movieTitle'>
                        Your Movie Collection
                    </h1>
                    <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
                </div>
                <div className="div-board">
                    <div className="row">
                        {
                            //This turns this.state.notes from soemthing like:
                            //[ <Note title="Class Notes" body ="Always...."> and etc
                            this.state.notes.map((note) =>{
                                return <Note key={note.id} id = {note.id} deleteHandler ={this.deleteNote.bind(this)}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
