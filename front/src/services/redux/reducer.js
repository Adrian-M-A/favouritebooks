const { GET_ALL_BOOKS } = require("./types/book");

const initialState = {
    allBooks: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_BOOKS:
            return {
                ...state,
                allBooks: action.payload
            }
        default:
            return state;
    }
}

export default reducer;