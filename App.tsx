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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '@config';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const YouTubeStack = createStackNavigator();
const FlightStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AuthStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Screens.HomeScreen} component={YouTubeScreen} />
    </HomeStack.Navigator>
  );
}

function YouTubeNavigator() {
  return (
    <YouTubeStack.Navigator initialRouteName={Screens.HomeScreen}>
      <HomeStack.Screen name={Screens.HomeScreen} component={YouTubeScreen} />
    </YouTubeStack.Navigator>
  );
}

function FlightNavigator() {
  return (
    <FlightStack.Navigator initialRouteName={Screens.HomeScreen}>
      <HomeStack.Screen name={Screens.HomeScreen} component={YouTubeScreen} />
    </FlightStack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName={Screens.HomeScreen}>
      <HomeStack.Screen name={Screens.HomeScreen} component={YouTubeScreen} />
    </ProfileStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={Screens.LoginScreen}>
      <HomeStack.Screen name={Screens.LoginScreen} component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Screens.HomeNavigator}>
      <Tab.Screen name={Screens.HomeNavigator} component={HomeNavigator} />
      <Tab.Screen
        name={Screens.YouTubeNavigator}
        component={YouTubeNavigator}
      />
      <Tab.Screen name={Screens.FlightNavigator} component={FlightNavigator} />
      <Tab.Screen
        name={Screens.ProfileNavigator}
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={Screens.LoginScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen
            name={Screens.AuthNavigator}
            component={AuthNavigator}
          />
          <MainStack.Screen name={Screens.MyTabs} component={MyTabs} />
        </MainStack.Navigator>
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
