
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'red'
  }
});

export default App;
