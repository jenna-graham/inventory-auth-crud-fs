import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/create">Create New Book</Link>
            </li>
            <li>
              <Link to="/books/1">Update a book</Link>
            </li>
            <li>
              <Link to="/books">List of Books</Link>
            </li>
            <li>
        
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/books/:id">
            <UpdatePage />
          </Route>
          <Route path="/books">
            <ListPage />
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
        </Switch>
      </div>

    </Router>
     
  );
}

export default App;
