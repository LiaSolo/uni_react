import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './pages/Main'
import Participants from './pages/Participants'
import FacultyInfo from './pages/InfoPages/index.js'
import { faculties } from './Faculties';

function App() {
  const facs = ['hsm', 'bio']
  return ( 
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/parts" element={<Participants />}/>
        <Route path="/parts/:faculty" element={<FacultyInfo />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
