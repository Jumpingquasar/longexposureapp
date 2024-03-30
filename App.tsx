import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { mockServerStart } from './src/mockServer/mockServer';

function App(): React.JSX.Element {

  mockServerStart();

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );

};
export default App;
