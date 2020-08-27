import React from 'react';
import ReactDOM from 'react-dom';

import './ModalEdit.css';
import { connect } from 'react-redux';
import { editModal } from '../../services/redux/actions';

const ModalEdit = (props) => {

    const closeModal = () => {
        editModal(false);
    }

    return ReactDOM.createPortal(
        <div id="modalEditWrapper">
            <div id="modalEditBackdrop" onClick={closeModal}>
                <div id="modalEditContainer">
                    <div id="bookUpModalEdit">
                        <img id="bookCoverModalEdit" src={props.bookDetail.imagePath} alt=""/>
                    </div>
                    <div id="bookDownModalEdit">
                        <div id="titleModalEdit">{props.bookDetail.title}</div>
                        <div id="descriptionModalEdit">{props.bookDetail.description}</div>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
}

const mapStateToProps = (state) => ({bookDetail: state.bookDetail, showModal: state.showModal})
export default connect(mapStateToProps) (ModalEdit);