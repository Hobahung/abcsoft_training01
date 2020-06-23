import {ViewStyle, StyleProp} from 'react-native';

export interface ItemComponentProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  isHighLight?: boolean;
  isActive?: boolean;
  style?: ViewStyle
}
