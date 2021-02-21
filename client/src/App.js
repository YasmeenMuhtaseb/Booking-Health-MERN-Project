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
  return (
    <div className="App">
      <NavBar/>
      <HomePhoto/>
      {/* <Calender/> */}
      <Special/>
      <Corona/>
      {/* <SignIn/> */}
      <SignUp/>
      <PopUpLogin/>
    </div>
  );
}

export default App;
