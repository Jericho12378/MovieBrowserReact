
import './App.css';
import Movies from './components/Movies.jsx';
import Nav from './components/Navbar.jsx';
//https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Movies></Movies>
    </div>
  );
}

export default App;
