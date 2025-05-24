
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';
import Account from './Accounts.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </Router>
  )
}

export default App