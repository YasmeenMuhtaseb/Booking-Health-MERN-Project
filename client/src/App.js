import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import Calender from './components/Calender/Calender'
import Corona from './components/corona/Corona'
import HomePhoto from './components/HomePhoto/HomePhoto'
import SignIn from './components/Login/SingIn'
import NavBar from './components/NavBar/NavBar'
import PopUpLogin from './components/PopUpLogin/PopUpLogin'
import SignUp from './components/Registration/SignUp'
import Special from './components/Specialization/Special'
// import './App.css';





function App() {
  const cookie = new Cookies();

  useEffect(() => {
    cookie.get('user');
    console.log(cookie)
  },[])

  return (
    <div className="App">
      <NavBar />
      <HomePhoto/>
      {/* <Calender/> */}
      <Special/>
      <Corona/>
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
