import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

import logoLogin from './assets/login.png';

export function Signin({ navigation }) {
  const entrar = () => {
    navigation.navigate('ShowBottomTabs');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={logoLogin} style={styles.imageLogin} />
      </View>

      <View style={styles.containerInputs}>
        <TextInput 
          style={styles.inputs}
          placeholder="e-mail"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput 
          style={styles.inputs}
          placeholder="senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />

        <TouchableOpacity 
          style={styles.btnSubmit} 
          activeOpacity={0.7}
          onPress={() => entrar()}
        >
          <Text style={styles.submitTexte}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};