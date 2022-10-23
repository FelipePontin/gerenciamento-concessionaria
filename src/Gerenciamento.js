import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Estoque from './pages/Estoque/Estoque';

import './Gerenciamento.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Estoque/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
