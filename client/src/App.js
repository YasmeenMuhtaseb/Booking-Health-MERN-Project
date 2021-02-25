import NavBar from './components/NavBar/NavBar'
import Specializations from './components/Specializations/Specializations'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import './App.css';
import { Router } from '@reach/router'
import  Home  from './components/Home/Home'
import AllDoctors from './components/AllDoctors/AllDoctors'
import Message from './components/Chat/Message';
import Profile from './components/profile/profile';
import Profiles from './components/Profiles/Profiles';
import { useState } from 'react';
import Doctors from './components/Doctors/Doctors';





function App() {
  const [reRender, setReRender] = useState(false)

  const reRenderNav = () => {
    setReRender(!reRender)
  }

  return (
    <div className="App">
      <NavBar render={reRender}/>
      <Router>
        <Home path="/" />
        <Profiles path="/profile/:id" reRender={reRenderNav}/>
        <Specializations path="/specializations" />
        <Doctors path="/doctors/:name" />
        <AllDoctors path="/doctors" />
        <Message path="/chat/:id" />
      </Router>
      
      {/* <Message /> */}
    </div>
  );
}

export default App;
