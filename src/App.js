import './App.css';
import Profile from './pages/Profile';
import LoginButton from './componets/LoginButton';


function App() {
  return (
    <div className="App">
      <h1>App Auth0</h1>
      <LoginButton/>
      <Profile/>
    </div>
  );
}

export default App;
