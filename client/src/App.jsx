import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'; 
import Signin from './pages/Signin';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
