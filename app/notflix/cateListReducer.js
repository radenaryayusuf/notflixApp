const initialState = {
    results: [],
    isLoading: false,
    isError: false ,
    data: {}
}
  
const cateListReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "CATE_LIST_PENDING":
        return {...state, isLoading: true}       
        case "CATE_LIST_FULFILLED":
        return {...state, isLoading: false, results: action.payload.data}       
        case "CATE_LIST_REJECTED":
        return {...state, isLoading: false, isError: true}       
     
        
        default:
            return state
    }
}

export default cateListReducer