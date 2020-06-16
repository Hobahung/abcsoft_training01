import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './LoginScreenStyle';

export interface LoginScreenProps {}

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = (
  props: LoginScreenProps,
) => {
  return (
    <View>
      <Text>Hello ABC Soft</Text>
    </View>
  );
};
