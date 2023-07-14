import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import SideBar from './components/SideBar/SideBar';


function App() {
  return (
    <div className="App">
        <div className='AppGrass'>
      <SideBar/>
      <MainDash/>
     <RightSide/>
        </div>

        
    </div>
  );
}

export default App;
