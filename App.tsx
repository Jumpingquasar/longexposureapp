import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { mockServerStart } from './src/mockServer/mockServer';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {

  //TODO: APK & TestFlight
  //TODO: App Icon IOS
  
  mockServerStart(); // Mock API. Simulates API responses using the repository object.

  return (
    // Redux Provider
    <Provider store={store}> 
      {/* Redux persistence */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Navigation main component */}
        <Navigation/>
      </PersistGate>
    </Provider>
  );

};
export default App;
