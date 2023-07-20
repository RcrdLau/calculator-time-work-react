import React from 'react';
import { createRoot } from 'react-dom/client';
//redux
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//componentes
import Main from './routes/main';
import { GlobalStyles } from './styles/globalStyles';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <Main />
    </PersistGate>
  </Provider>
</React.StrictMode>)