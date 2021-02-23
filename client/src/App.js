import NavBar from './components/NavBar/NavBar'
import Specializations from './components/Specializations/Specializations'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import './App.css';
import { Router } from '@reach/router'
import  Home  from './components/Home/Home'
import AllDoctors from './components/AllDoctors/AllDoctors'
import Profile from './components/profile/profile';





function App() {

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        <DoctorDetails path="/profile/:id"/>
        <Specializations path="/specializations" />
        <AllDoctors path="/doctors" />
      </Router>
      <Profile/>
    </div>
  );
}

export default App;
