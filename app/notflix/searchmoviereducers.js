const initialState = {
    result : [],
    isLoading: true,
    isError: false,
    data: {}
}

const searchmovieReducers = (state = initialState, action)=> {
    switch(action.type) {
        case "SEARCH_MOVIE_PENDING":
            return {...state, isLoading: true, results: action.payload}
        case "SEARCH_MOVIE_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}
        case "SEARCH_MOVIE_REJECTED":
            return {...state, isLoading: false, isError: true}

        default: return state
    }
}

export default searchmovieReducers