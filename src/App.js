import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
