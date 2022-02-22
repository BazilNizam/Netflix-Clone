import './App.css';
import Banner from './components/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,documenteries,orginals, romance} from './urls'


function App() {
  
  return (
    <div className="App">
    <Banner/>
    <RowPost url={orginals} title='Netflix Originals'/>
    <RowPost url={action} title='Action Movies' isSmall/>
    <RowPost url={romance} title='Romatic Movies' isSmall/>
    <RowPost url={documenteries} title='Documenteries' isSmall/>
    </div>
  );
}

export default App;
