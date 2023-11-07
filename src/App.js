import './normaliser.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouteur from './Pages/Public/PublicRouteur.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouteur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
