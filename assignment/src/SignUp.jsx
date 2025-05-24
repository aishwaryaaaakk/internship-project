import React,{useState} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [isAgency, setIsAgency] = useState(false);

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const userData = {
        fullName,
        phoneNumber,
        email,
        password,
        companyName,
        isAgency,
      };
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setCompanyName('');
      setIsAgency(false);
  
      navigate('/account')
    };
  
    
  return (
    <div className='signupPage'>
        <h1 className='signup-text'>Create your PopX account</h1>
        <form onSubmit={handleSubmit}>
        <div className='form-data'>
            
            <label className='label' htmlFor='fullname'>Full Name</label>
            <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
             />
            <label className='label' htmlFor='phone'>Phone number</label>
            <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
             />
            <label className='label' htmlFor='email'>Email address</label>
            <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
            <label className='label' htmlFor='password'>Password</label>
            <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
             />
            <label className='label' htmlFor='company'>Company name</label>
            <input
            type="text"
            id="companyName"
            placeholder="Enter Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
             />
            <div className='agency-sec'>
                <p>Are you an Agency?<span style={{color:"red"}}>*</span></p>
                <div className='radio-btns'>
                  <div >
                    <label>
                       <input type='radio'
                        name='agency'
                       value="yes"
                       checked={isAgency}
                       onChange={() => setIsAgency(true)}
                       required  />
                       Yes
                    </label>
                    </div>
                    <div className='radios'>
                    <label >
                       <input type="radio"
                       name="agency"
                       value="no"
                       checked={!isAgency}
                       onChange={() => setIsAgency(false)}
                       required />
                       No
                    </label>
                    </div>
                </div>
            </div>
        </div>
        <button className='signup-btn' type='submit'>Create Account</button>
        </form>
    </div>
  )
}

export default SignUp;