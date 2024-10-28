import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Store from './pages/Store'
import Questions from './pages/Questions'
import Entry from './pages/Entry'
import FreePackSelection from './components/FreePackSelection'
import './index.css';

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <MainContent user={user} />
      </BrowserRouter>
    </div>
  );
}

function MainContent({ user }) {
  const location = useLocation(); // Now it's inside the Router

  // List of paths where the Navbar should not be shown
  const noNavbarPaths = ['/test', '/signup', '/login', '/entry'];

  return (
    <>
      {/* Conditionally render Navbar based on current path */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={user ? <Home /> : <Navigate to="/entry" />}
          />

          <Route
            path='/store'
            element={user ? <Store /> : <Navigate to="/login" />}
          />

          <Route
            path='/dashboard'
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path='/signup'
            element={!user ? <Signup /> : <Questions />}
          />

          <Route
            path='/test'
            element={user ? <Questions /> : <Navigate to="/login" />}
          />

          <Route
            path='/select-pack' 
            element={user ? <FreePackSelection /> : <Navigate to="/login" />} 
          />

          <Route
            path='/entry'
            element={<Entry/>}
          />

        </Routes>
      </div>
    </>
  );
}

export default App;
