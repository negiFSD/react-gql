import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './components/pages/Character';
import CharacterList from './components/pages/CharacterList';
import Search from './components/pages/Search';
// import TestPage from './components/pages/TestPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<CharacterList/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/:idd' element={<Character/>} />
      {/* <Route path='/dd' element={<TestPage/>} /> */}

      </Routes>
{/* <CharacterList/> */}

    </div>
  );
}

export default App;
