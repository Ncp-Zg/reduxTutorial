import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPost, logOut, resetPost, setAuth } from './redux/Actioncreators/authActionCreators';

function App() {

  const state = useSelector(state => state)
  const dispatch = useDispatch();


  const handleSubmit = ()=>{
    const data ={
      isLoggedIn:true,
      user :"ahmet mehmet"
    };

    dispatch(setAuth(data))
    
  }


  useEffect(() => {
    if(state.auth.isLoggedIn){
      dispatch(addPost())
    }
    
  }, [state.auth.isLoggedIn])

  return (
    <div>
    <div style={{textAlign:'center'}}>
      <h1>Redux Tutorial</h1>
    </div>

    {(state.auth.isLoggedIn ? <>
      <p>welcome {state.auth.user}</p>
      <div>
        {state.post.isLoading? 
        <p>LOADING..... </p>:
          
          state.post.posts.map((pst,index)=>
          <p key={index}>{pst.title}</p>)
        }
      </div>
      <button onClick={()=>{dispatch(logOut());dispatch(resetPost())}}>LogOut</button>
    </> : <>
      <button onClick={()=>handleSubmit()} >LogIn</button>
    </>)}

   
    </div>
  );
}

export default App;
