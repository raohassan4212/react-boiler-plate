import { Provider } from 'react-redux';
import AppRouter from './config/AppRouter';
import './App.css';
import Store from './store';

function App() {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
