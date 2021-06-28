import './App.css';
import NavBar from './components/navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateCategory from './components/createCategory/createCategory';
import CreateRoom from './components/createRoom/createRoom';
import Rooms from './components/rooms/rooms';
import Categories from './components/rooms/categories';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <section>
          <Switch>
            <Route path="/create-category" component = {CreateCategory} />
            <Route path="/create-room" component = {CreateRoom}/>
            <Route path="/:id" component = {Categories} />
            <Route path= "/" component = {Rooms} exact/>

          </Switch>
        </section>
      </Router>
     
    </div>
  );
}

export default App;
