import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme=="light"? "light" : "dark"}`}>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
