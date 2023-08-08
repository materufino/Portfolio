import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ProjectsHome from './Components/ProjectsHome';
import HobbiesHome from './Components/HobbiesHome';



function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<ProjectsHome />} />
          <Route path='/Hobbies' element={<HobbiesHome />} />



          <Route path='*' element={<Navigate to={'/'} replace />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
