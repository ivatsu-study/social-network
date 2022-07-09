import { Header, Nav, Profile } from './components';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <Header logo={logo} />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
