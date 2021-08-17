import { CHECK_AUTH, LOG_OUT } from "../ActionTypes/ActionTypes";

const checkAuth = (data)=>({
    type:CHECK_AUTH,
    payload:data
})

const logout =()=>({
    type:LOG_OUT
})

export const setAuth = (data)=>dispatch=>{dispatch(checkAuth(data))};
export const logOut = ()=>dispatch=>{dispatch(logout())};