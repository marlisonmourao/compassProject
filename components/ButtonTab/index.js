import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function MyIcon(props) {
  const {focused, sizeBackground = 44, cor, tamanho, nome} = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused
            ? `rgba(48,79,254, 1)`
            : `rgba(48,79,254, 0.1)`,
        },
        {height: sizeBackground, width: sizeBackground},
      ]}>
      <Icon name={nome} size={tamanho} color={cor} />
    </View>
  );
}
