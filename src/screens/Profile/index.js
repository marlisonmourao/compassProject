import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export function Profile() {
  return (
    <View style={styles.containerDad}>
      <View style={styles.container}>
       <Icon
       style={styles.iconNeutral} 
        name='alert-circle' 
        size={70} 
        color='#808080'
       />
        <Text style={styles.text}>
          Tela em Construção
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70,

  },
  iconNeutral: {
    alignItems: 'center',
  
  },
  text: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    margin: 85,
    marginTop: 20,
    color: '#808080',
    width: 300
  },
});
