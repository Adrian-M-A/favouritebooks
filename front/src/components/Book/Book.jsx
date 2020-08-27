import React from 'react';

import './Book.css';

const Book = (props) => {

    const viewBookDetail = () => {
        console.log('Detalles')
    }

    const editBook = () =>{
        console.log('Editando');
    }

    return(
        <div id="bookContainer">
            <div id="bookLeft">
                <img id="bookCover" src={props.book.imagePath} alt=""/>
                <button id="editButton" onClick={editBook}>Edit</button>
            </div>
            <div id="bookRight">
                <div id="title" onClick={viewBookDetail}>{props.book.title}</div>
                <div id="description">{props.book.description}</div>
            </div>
        </div>
    )
}

export default Book;