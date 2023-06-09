import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';

import {CheckUserToken} from './utils/UsersUtils'

import './styles/App.module.css';



function App() {
  return (
    <BrowserRouter>
      {CheckUserToken()
      ?
      <Navigation>
        <h1>Text</h1>
        <h1>Text2</h1>
      </Navigation>
      : null}
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;