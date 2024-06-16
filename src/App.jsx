import './App.scss';
import { HashRouter , Route , Routes, Router } from 'react-router-dom';

import Home from './pages/Home';
import AI from './pages/AI';
import Mobile from './pages/Mobile';
import TV from './pages/TV';
import HomeApplication from './pages/HomeApplication';
import Computing from './pages/Computing';

function App() {
  return (
    <>
      <HashRouter>
          <Routes>
                  <Route  path='/' element={<Home />} />
                  <Route  path='/ai' element={<AI />} />
                  <Route  path='/mobile' element={<Mobile />} />
                  <Route  path='/tv' element={<TV />} />
                  <Route  path='/homeapplication' element={<HomeApplication />} />
                  <Route  path='/computing' element={<Computing />} />
          </Routes>
      </HashRouter> 
      
      
    </>
  )
}

export default App
