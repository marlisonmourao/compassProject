import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';



import styles from './style';

import Loading from '../../../components/Loading';
import UseAuth from './useAuth';

import logoLogin from './assets/login.png';

export function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleSignin, formatInvalid, userInvalid, isLoad} = UseAuth(
    email,
    password,
    navigation,
  );

  return (

  
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={logoLogin} style={styles.imageLogin} />
      </View>

      <Loading visible={isLoad} />

      <View style={styles.containerInputs}>
        <TextInput
          style={styles.inputs}
          placeholder="e-mail"
          autoCorrect={false}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.inputs}
          placeholder="senha"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />


        <Text 
          style={{fontWeight: 'bold', color: 'white',  fontSize: 15, 
          display: formatInvalid ? 'flex' : 'none'}
        }>
          A formatação dos campos está errada.
        </Text>

        <Text 
        style={{fontWeight: 'bold', color: 'white', fontSize: 15,  
            display: userInvalid ? 'flex' : 'none'} 
        }>
          Senha e/ou e-mail errados.
        </Text>

        <TouchableOpacity
          style={styles.btnSubmit}
          activeOpacity={0.7}
          onPress={() => handleSignin()}>
          <Text style={styles.submitTexte}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
