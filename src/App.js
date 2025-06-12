import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './page/Home/Home';
import Galeria from './page/Galeria/Galeria';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/galeria' element={<Galeria />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
