
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContent from './src/routers'
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar barStyle="dark-content" />
        <AppContent />
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
