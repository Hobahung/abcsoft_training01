/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen, YouTubeScreen} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '@config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Screens.FlightScreen}>
      <Tab.Screen name={Screens.FlightScreen} component={YouTubeScreen} />
      <Tab.Screen name={Screens.FlightInfoScreen} component={YouTubeScreen} />
      <Tab.Screen name={Screens.BlockListScreen} component={YouTubeScreen} />
      <Tab.Screen name={Screens.YouTubeScreen} component={YouTubeScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screens.LoginScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={Screens.MyTabs} component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
