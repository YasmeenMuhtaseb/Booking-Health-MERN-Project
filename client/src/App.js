import Calender from './components/Calender/Calender'
import Corona from './components/corona/Corona'
import HomePhoto from './components/HomePhoto/HomePhoto'
import NavBar from './components/NavBar/NavBar'
import Special from './components/Specialization/Special'




function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePhoto/>
      {/* <Calender/> */}
      <Special/>
      <Corona/>
    </div>
  );
}

export default App;
