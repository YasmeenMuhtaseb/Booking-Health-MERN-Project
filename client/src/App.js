import NavBar from './components/NavBar/NavBar'
import Specializations from './components/Specializations/Specializations'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import './App.css';
import { Router } from '@reach/router'
import  Home  from './components/Home/Home'
import AllDoctors from './components/AllDoctors/AllDoctors'
import Message from './components/Chat/Message';





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
      <Message />
    </div>
  );
}

export default App;
