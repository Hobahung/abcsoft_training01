/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {LoginScreen} from '@screens';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5031EC',
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
