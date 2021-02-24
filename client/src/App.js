import NavBar from './components/NavBar/NavBar'
import Specializations from './components/Specializations/Specializations'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import './App.css';
import { Router } from '@reach/router'
import  Home  from './components/Home/Home'
import AllDoctors from './components/AllDoctors/AllDoctors'
import Message from './components/Chat/Message';
import Profile from './components/profile/profile';
import Doctors from './components/Doctors/Doctors';
import Profiles from './components/Profiles/Profiles';





function App() {

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        <Profiles path="/profile/:id" />
        <Specializations path="/specializations" />
        <AllDoctors path="/doctors" />
        <Doctors path="/doctors/:name" />
      </Router>
      
      {/* <Message /> */}
    </div>
  );
}

export default App;
