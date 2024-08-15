import './styles/App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;