import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './ItemComponentStyle';
import {ItemComponentProps} from './ItemComponentProps';
import {Colors} from '@themes';

export function ItemComponent(props: ItemComponentProps) {
  const {
    isHighLight,
    description,
    image,
    onClick,
    title,
    isActive,
    style,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {backgroundColor: isHighLight ? Colors.Border : Colors.White},
        style,
      ]}
      onPress={onClick ? () => onClick() : () => {}}>
      <Image
        source={{uri: image}}
        style={[
          styles.itemImage,
          {
            borderWidth: isActive ? 5 : 0,
            borderColor: Colors.Blue,
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
