import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Tic from './components/Tic';
import App from './components/pet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//Navbar
class Navbar extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-light bg-light">
        <Link to="/board">Movie Collection</Link> |
        <Link to="/tic">Tic-Tac-Toe</Link> |
        <Link to="/pet">Pet Shop</Link>
      </nav>
    );
  }
}

class MyRoutes extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path='/board' element={<Board/>}/>
            <Route path='/tic' element={<Tic/>}/>
            <Route path='/pet' element={<App/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}


ReactDOM.render( //Calls reacts, and renders it a particular location
  <React.StrictMode>
    <MyRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);
