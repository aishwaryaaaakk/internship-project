import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const storedData = JSON.parse(localStorage.getItem('userData'));
  
      if (storedData && storedData.email === email && storedData.password === password) {
        navigate('/account')
      } else {
        alert("Ivalid email or password....")
      }
    };
    
  return (
    <div className='loginpage'>
        <div className='logintext'>
            <h1>Signin to your PopX account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='loginContent'>
            <form onSubmit={handleSubmit} >
            <div className='form'>
                <label htmlFor='email address'>Email Address</label>
                <input 
                type="email"
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                 />
                <label htmlFor='Password'>Password</label>
                <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                 />
                
            </div>
            <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LogIn;