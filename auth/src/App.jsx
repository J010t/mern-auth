import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
    {/* headers */}
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
