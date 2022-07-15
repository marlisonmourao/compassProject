import React from 'react';
import {View, Text} from 'react-native';
import Icon  from 'react-native-vector-icons/Feather';

import styles from './style'

export function ActivityContent() {
  return (
    <View style={styles.containerDad}>
      <View style={styles.container}>
       <Icon
       style={styles.iconNeutral} 
        name='meh' 
        size={70} 
        color='#808080'
       />
        <Text style={styles.text}>
          Você ainda não tem nenhum registro diário. Para começar, toque no
          ícone de adicionar na tela.
        </Text>
      </View>
    </View>
  );
  }