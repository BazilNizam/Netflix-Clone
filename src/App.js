import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {action,comedy,documenteries,orginals, romance} from './urls'


function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title='Netflix Originals'/>
    <RowPost url={action} title='Action Movies' isSmall/>
    <RowPost url={romance} title='Romatic Movies' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
