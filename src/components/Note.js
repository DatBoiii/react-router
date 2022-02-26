import React, {Component, useState} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

const movieTitle = "(Your Movie Title)";
const movieDescription = "(Your movie description)";
const movieYear = "(Your movie year)";
const movieGenre = "(Your movie genre)";

class Note extends Component {

    //You should honestly when using React probably always have your Component constructors take props and call super(props) as the thing
    constructor(props) {
        super(props); //Inside this Component.construct will set up this.props = props
        this.titleContent = React.createRef();
        this.bodyContent = React.createRef();
        this.yearContent = React.createRef();
        this.genreContent = React.createRef();
        this.state = {
            title: movieTitle,
            body: movieDescription,
            year: movieYear,
            genre: movieGenre,
            editMode: false
        }
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleSave() {
        //Not saving anything YET!
        this.setState({
            title: this.titleContent.current.value,
            body: this.bodyContent.current.value,
            year: this.yearContent.current.value,
            genre: this.genreContent.current.value,
            editMode:false
        });
    }

    handleDelete() {
        this.props.deleteHandler(this.props.id);
    }
    
    render() {
        let titleElement, bodyElement, yearElement, genreElement, buttonArea;
        if (this.state.editMode) {
            //Display edit mode
            titleElement = <textarea ref={this.titleContent} className='title-textarea' defaultValue={this.state.title}></textarea>;
            bodyElement = <textarea ref={this.bodyContent} className='body-textarea' defaultValue={this.state.body}></textarea>;
            yearElement = <textarea ref={this.yearContent} className='year-textarea' defaultValue={this.state.year}></textarea>;
            genreElement = <textarea ref={this.genreContent} className='genre-textarea' defaultValue={this.state.genre}></textarea>;
            buttonArea = (
                <div>
                    <button className='btn btn-primary' onClick={this.handleSave.bind(this)}>Save</button>
                </div>
            );
        } else {
            //Display view mode
            titleElement = <h5 className="card-title">{this.state.title}</h5>; 
            bodyElement = <p className='card-title'>{this.state.body}</p>;
            yearElement = <p className='card-title'>{this.state.year}</p>;
            genreElement = <p className='card-title'>{this.state.genre}</p>;
            buttonArea = (
                <div>
                        <input type="checkbox" id="watch" name="topping" value="Paneer" />Watched?
                        <button className='btn btn-info' onClick={this.handleEdit.bind(this)}>Edit</button>
                        <button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>
            );
        }
        return (
            <div className="col-sm-6">
            <div className="card card-view">
                <div className="card-body">
                    <h5 className='static'>Movie title:{titleElement}</h5>
                    <p className='static'>Movie description:{bodyElement}</p>
                    <p className='static'>Release date: {yearElement}</p>
                    <p className='static'>Genre of movie:{genreElement}</p>
                    {buttonArea}
                </div>
            </div>
        </div>

        );
    }
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
    year: "A cool year"
};

Note.propTypes = {
    title: PropTypes.string
};

export default Note;