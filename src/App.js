import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Box width='400px' sx={{ width: { xl: '1488px'}}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercises/:id' element={<Exercises />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
