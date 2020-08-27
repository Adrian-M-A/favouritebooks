import React from 'react';
import { getAllBooks } from '../../services/redux/actions';
import { connect } from 'react-redux';

import './Landing.css';
import Book from '../../components/Book/Book';
import { useEffect } from 'react';
import ModalView from '../../components/ModalView/ModalView';

const Landing = (props) => {

    useEffect(() => {
        getAllBooks();
    }, [])

    return(
        <div id="landingContainer">
            {props.books?.map(book => <Book key={book?._id} book={book}/>)}
            {props.showModal && <ModalView />}
        </div>
    )

}

const mapStateToProps = (state) =>({books : state.allBooks, showModal: state.showModal})
export default connect(mapStateToProps)(Landing);