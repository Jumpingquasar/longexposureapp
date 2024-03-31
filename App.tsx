import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { mockServerStart } from './src/mockServer/mockServer';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {



  //TODO: Add StyleSheets
  
  mockServerStart();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  );

};
export default App;
