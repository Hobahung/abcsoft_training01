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
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.textSignIn}>SIGN IN</Text>
          <View>
            <TextInput
              value={''}
              placeholder={'Username'}
              editable={false}
              style={styles.input}
            />
          </View>
          <TextInput
            value={''}
            placeholder={'Password'}
            editable={false}
            style={styles.input}
          />
          <TouchableOpacity style={{marginTop: 59}}>
            <Text style={styles.textForgotYourPassword}>
              Forget your password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSubmit}>
            <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
        Don’t have an account?
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5031EC',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 54,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    width: 340,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 71,
    paddingVertical: 30
  },
  textSignIn: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4830C9',
  },
  buttonSubmit: {
    backgroundColor: '#4830C9',
    width: 171,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  input: {
    marginTop: 32,
    width: 279,
    height: 45,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 5,
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 18,
    color: '#8A8A8A',
  },
  textForgotYourPassword: {fontSize: 16, color: '#8A8A8A', fontWeight: '600'},
});

export default App;
