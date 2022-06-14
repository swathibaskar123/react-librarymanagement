import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import Dashboard from './components/Dashboard/Dashboard';
import AboutLibrary from './components/AboutLibrary/AboutLibrary';
import AddBook from './components/AddBook/AddBook';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addbook' element={<AddBook/>}/>
      <Route path='/aboutlibrary' element={<AboutLibrary/>}/>
      </Routes>   
      </BrowserRouter>
    
 
        
    </div>
  );
}

export default App;
