import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from 'react-router';
import Start from './page/Start';
import Game from './page/Game';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='game' element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
