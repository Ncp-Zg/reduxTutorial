import { CHECK_AUTH } from "../ActionTypes/ActionTypes";

const checkAuth = (data)=>({
    type:CHECK_AUTH,
    payload:data
})



export const setAuth = (data)=>dispatch=>{dispatch(checkAuth(data))};