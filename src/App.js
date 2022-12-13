import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <Router>
        <div className='main'>
          <nav className='nav'>
            <button><Link to={'/'} className="nav-link">
               Home </Link></button>
            <button><Link to={'/create'} className="nav-link">Add Bird</Link></button>
          </nav>
          <h2 className='main-header'>My Bird Watch</h2>
          <hr />
          <Routes>
              <Route exact path='/' element={<Read/>} />
              <Route exact path='/create' element={<Create/>} />
              <Route exact path='/update' element={<Update/>} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;

