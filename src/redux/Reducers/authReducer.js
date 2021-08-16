import { CHECK_AUTH } from "../ActionTypes/ActionTypes";

const initialState = ({
    isLoggedIn : false,
    user : null
})



const authReducer = (state=initialState, {type,payload}) =>{
    switch(type){
        case CHECK_AUTH:
            state={isLoggedIn:payload.isLoggedIn,user:payload.user}
            
            return state;


        default:
        return state;
    }
}

export default authReducer