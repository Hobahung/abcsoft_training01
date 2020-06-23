import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@themes';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.Black,
    lineHeight: 24,
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.TextPrimary,
    lineHeight: 20,
  },
});
