import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const ButtonProfile = ({focused, color}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#304FFE' : '#fff'},
      ]}>
      <Icon name="list" style={styles.icon} color={color} />
    </View>
  );
};

export default ButtonProfile;
