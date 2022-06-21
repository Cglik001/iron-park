import './App.css';
import {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './store/auth-context';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ShowAllParkings from './pages/ShowAllParkings';
import MakeReservations from './pages/MakeReservations';
import ShowReservation from './pages/ShowReservation';
import EditReservation from './pages/EditReservation';
import UserProfile from './components/profile/UserProfile'
import Layout from './components/layout/Layout'



function App() {

  const authCxt = useContext(AuthContext)


  return (
    <Layout>
      <Routes>
          <Route path='/' element={<HomePage />} />
          {authCxt.isLoggedIn && (<Route path='/make-reservation/parking-id/:pid/user-id/:uid' element={<MakeReservations />} />)}
          {authCxt.isLoggedIn && (<Route path='/show-reservation/reservation-id/:rid' element={<ShowReservation />} />)}
          {authCxt.isLoggedIn && (<Route path='/edit-reservation/reservation-id/:rid' element={<EditReservation />} />)}
          <Route 
                path='/profile' 
                element={ authCxt.isLoggedIn ? <UserProfile /> : <Navigate to="/login"/>} 
          />
          <Route 
                path='/admin/parking-log' 
                element={ authCxt.isLoggedIn ? <ShowAllParkings /> : <Navigate to="/login"/>} 
          />
          {!authCxt.isLoggedIn && (<Route path='/login' element={<AuthPage />} />)}
          <Route path='*' element={<Navigate to="/"/>}  />
        </Routes>
      </Layout>
  );
}

export default App;