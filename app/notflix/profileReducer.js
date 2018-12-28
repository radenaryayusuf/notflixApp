const initialState = {
    results: [],
    isLoading: true,
    isError: false ,
    data: {}
}
  
const profileReducer = (state = initialState, action) => {
    switch (action.type) {


            case "GET_PROFILE_PENDING":
            return {...state, isLoading: true, data: action.payload}       
        case "GET_PROFILE_FULFILLED":
            return {...state, isLoading: false, data: action.payload.data}       
        case "GET_PROFILE_REJECTED":
            return {...state, isLoading: false, isError: true}  
        default:
            return state
    }
}

export default profileReducer