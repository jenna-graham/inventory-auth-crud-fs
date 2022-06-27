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
import { signOut } from './services/fetch-utils';


function App() {
  const [user, setUser] = useState(client.auth.user());
  console.log(user);

  async function handleSignOutClick() {
    await signOut();
    setUser('');
    
  }
  return (
    <Router>
      <div className='App'>
        <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Add New Book</Link>
            </li>
            {/* <li>
              <Link to="/books/1">Update a book</Link>
            </li> */}
            <li>
              <Link to="/books">List of Books</Link>
            </li>
            <li>
              {user && 
            <button className="logout-button" onClick={handleSignOutClick}>Logout</button>}
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
            {
              user 
                ? <ListPage /> 
                : <Redirect to="/" />
            }
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
