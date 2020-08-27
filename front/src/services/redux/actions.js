import axios from 'axios';
import { API_URL } from '../../config/api';
import store from './store.js';
import { GET_ALL_BOOKS } from './types/book';

export const getAllBooks = async() =>{
    
    const res = await axios.get(API_URL);
    store.dispatch({
        type: GET_ALL_BOOKS,
        payload: res.data
    })
}
