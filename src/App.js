import './App.css';
import Profile from './pages/Profile';
import LoginButton from './componets/LoginButton';
import LogoutButton from './componets/LogoutButton';

import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) return <h1>Loading.....</h1>


  return (
    <div className="App">
      <h1>App Auth0</h1>

      {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
      

      <Profile/>
    </div>
  );
}

export default App;
