import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './LoginScreenStyle';
import {Colors} from '@themes';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import { Screens } from '@config';

export interface LoginScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = (
  props: LoginScreenProps,
) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        /> */}
        <View style={styles.contentContainer}>
          <Text style={styles.textSignIn}>SIGN IN</Text>
          <View>
            <TextInput
              onChangeText={value => {}}
              value={userName}
              placeholder={'Username 2'}
              editable={true}
              style={styles.input}
            />
          </View>
          <TextInput
            value={password}
            placeholder={'Password'}
            editable={false}
            style={styles.input}
          />
          <TouchableOpacity style={{marginTop: 59}}>
            <Text style={styles.textForgotYourPassword}>
              Forget your password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => {navigation.navigate(Screens.MyTabs)}}>
            <Text
              style={{color: Colors.White, fontSize: 18, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text
        style={{
          color: Colors.White,
          fontSize: 16,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Don’t have an account?
      </Text> */}
    </View>
  );
};
