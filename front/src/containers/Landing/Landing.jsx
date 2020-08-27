import React from 'react';
import { getAllBooks } from '../../services/redux/actions';
import { connect } from 'react-redux';

import './Landing.css';
import Book from '../../components/Book/Book';
import { useEffect } from 'react';

const Landing = (props) => {

    useEffect(() => {
        getAllBooks();
    }, [])

    return(
        <div id="landingContainer">
            {props.books?.map(book => <Book key={book?._id} book={book}/>)}
        </div>
    )

}

const mapStateToProps = (state) =>({books : state.allBooks})
export default connect(mapStateToProps)(Landing);