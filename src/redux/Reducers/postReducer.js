import { ADD_POST, IS_LOADING, RESET_POST } from "../ActionTypes/ActionTypes";

const initialState = {
    posts: [],
    isLoading : true
}



const postReducer = (state=initialState,{type,payload})=>{
        switch (type) {
            case ADD_POST:
                state={...state,posts:payload}
                
                return state;
            case IS_LOADING:
                state={...state,isLoading:payload}
                return state;
            case RESET_POST:
                state=initialState;
                return state;
        
            default:
                return state;
        }
}


export default postReducer;