import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/Pequeños/AboutMe';
import ProjectsHome from './Components/ProjectsHome';



function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Projects' element={<ProjectsHome />} />
          <Route path='Hobbies' element={<AboutMe />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
