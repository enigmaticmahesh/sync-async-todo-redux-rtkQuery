import { Provider } from 'react-redux';
import SynchronousTodos from './pages/synchronousTodos';
import AsynchronousTodos from './pages/asynchronousTodos';
import { synchronousStore } from './stores/synchronousStore';
import { asynchronousStore } from './stores/asynchronousStore';
import './App.css';

function App() {
  return (
    <article>
      <Provider store={synchronousStore}>
        <SynchronousTodos />
      </Provider>
      <Provider store={asynchronousStore}>
        <AsynchronousTodos />
      </Provider>
    </article>
  );
}

export default App;
