import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { mockServerStart } from './src/mockServer/mockServer';
import { store } from './src/store';

function App(): React.JSX.Element {



  //TODO: Add StyleSheets
  
  mockServerStart();

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );

};
export default App;
