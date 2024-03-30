import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );

};
export default App;
