
import './App.scss';
import Jugadores from './Components/Jugadores';
import Titulares from './Components/Titulares';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {



  return (
    
    <Provider store={store}>

      <main>
        <h1>Jugadores Manager</h1>
        <Jugadores />
        <Titulares />
      </main>

    </Provider>
  );
}

export default App;
