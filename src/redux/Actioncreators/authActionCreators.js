import { ADD_POST, CHECK_AUTH, IS_LOADING, LOG_OUT, RESET_POST } from "../ActionTypes/ActionTypes";

const checkAuth = (data)=>({
    type:CHECK_AUTH,
    payload:data
})

const logout =()=>({
    type:LOG_OUT
})

const addpost = (data) =>({
    type:ADD_POST,
    payload:data
})

const setloading = (data) =>({
    type:IS_LOADING,
    payload:data
})

const resetpost = ()=>({
    type:RESET_POST
})

export const setAuth = (data)=>dispatch=>{dispatch(checkAuth(data))};
export const logOut = ()=>dispatch=>{dispatch(logout())};
export const addPost = ()=>dispatch=>{
    dispatch(setloading(true));

    fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"}).then(res=>res.json()).then((data)=>{
        dispatch(addpost(data));
        dispatch(setloading(false));
    })
    .catch((err)=>console.log(err))
};

export const resetPost = ()=>dispatch=>{dispatch(resetpost())}