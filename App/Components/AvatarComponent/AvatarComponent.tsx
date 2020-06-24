import React from 'react';
import {Image, View, Text} from 'react-native';
import {AvatarComponentProps} from './AvatarComponentProps';
import styles from './AvatarComponentStyle';

export function AvatarComponent(props: AvatarComponentProps) {
  const {image, name} = props;
  //   const initialColor = function (displayName: string) {
  //     const code = Math.abs(hashed(displayName) % 10);
  //     switch (code) {
  //       case 0:
  //         return '#f96868';
  //       case 1:
  //         return '#e53b75';
  //       case 2:
  //         return '#6d45bc';
  //       case 3:
  //         return '#465bd4';
  //       case 4:
  //         return '#324b81';
  //       case 5:
  //         return '#37a9b7';
  //       case 6:
  //         return '#178d81';
  //       case 7:
  //         return '#279566';
  //       case 8:
  //         return '#70a532';
  //       case 9:
  //         return '#fbc02d';
  //     }
  //   };
  //   const hashed = function (str: string) {
  //     if (!str) return 0;
  //     let hash = 0,
  //       i,
  //       chr,
  //       len;
  //     if (str.length === 0) {
  //       return hash;
  //     }
  //     for (i = 0, len = str.length; i < len; i++) {
  //       chr = str.charCodeAt(i);
  //       hash = (hash << 5) - hash + chr;
  //       hash |= 0;
  //     }
  //     return hash;
  //   };
  const getColorCode = () => {
    switch (name[0]) {
      case 'A':
      case 'B':
      case 'C':
      case 'C':
      case 'D': {
        return 'blue';
      }
      case 'E':
      case 'F':
      case 'G':
      case 'H':
      case 'K': {
        return 'yellow';
      }
    }
    return 'red';
  };
  return image ? (
    <Image source={{uri: image}} style={styles.container} />
  ) : (
    <View style={[styles.container, {backgroundColor: getColorCode()}]}>
      <Text>{name[0]}</Text>
    </View>
  );
}
