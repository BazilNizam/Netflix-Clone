import './App.css';
import Banner from './components/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  
  return (
    <div className="App">
    <Banner/>
    <RowPost title='Originals'/>
    <RowPost title='Action Movies' isSmall/>

    </div>
  );
}

export default App;
