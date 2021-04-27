
import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import AppStack from './src/routers/AppStack'
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar barStyle="dark-content" />
        <AppStack />
      </PersistGate>
    </Provider >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
  }
});

export default App;
