import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalContext from './context/GlobalContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/Store.jsx';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/Loading.jsx';

// Create the persistor
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
        <GlobalContext>
          <App />
        </GlobalContext>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
