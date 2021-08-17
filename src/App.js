import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { logOut, setAuth } from './redux/Actioncreators/authActionCreators';

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

  return (
    <div>
    <div style={{textAlign:'center'}}>
      <h1>Redux Tutorial</h1>
    </div>

    {(state.isLoggedIn ? <>
      <p>welcome {state.user}</p>
      <button onClick={()=>dispatch(logOut())}>LogOut</button>
    </> : <>
      <button onClick={()=>handleSubmit()} >LogIn</button>
    </>)}

   
    </div>
  );
}

export default App;
