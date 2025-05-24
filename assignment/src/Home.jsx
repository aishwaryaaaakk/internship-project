import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const handleSignin = () =>{
        navigate('/signup');
    }
    const handleLogin = () =>{
        navigate('/login');
    }
  return (
    <div className='homepage'>
        <div className='homeText'>
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='btns'>
           <button onClick={handleSignin} style={{backgroundColor:" blueviolet" , color:"white"}}>Create Account</button>
           <button onClick={handleLogin} style={{backgroundColor:"rgb(210, 150, 247)", color:"black"}}  >Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Home;