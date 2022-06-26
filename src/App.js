import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';
import { client } from './services/client';


function App() {
  const [user, setUser] = useState(client.auth.user());
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
            {
              !user
                ? <AuthPage setUser={setUser}/>
                : <Redirect to="/books" />
            }
            
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
