import React from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export default function UseAuth(email, password, navigation) {
  const [formatInvalid, setFormatInvalid] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [userInvalid, setUserInvalid] = useState(false);

  const postUseAuth = async () => {
    await api
      .post(
        '/oauth/token',
        {
          grant_type: 'password',
          email: email,
          password: password,
          client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
          client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
        },
        {
          validateStatus: status => status === 200,
        },
      )
      .then(async res => {
        navigation.reset({
          index: 0,
          routes: [{name: 'ShowBottomTabs'}],
        });
        await AsyncStorage.setItem('@@AppMood@@:token', res.data.access_token);
      })
      .catch(err => {
        console.log('Erro na autenticação ' + err);
        setUserInvalid(true);
        setTimeout(() => setUserInvalid(false), 3000);
      })
      .finally(() => setIsLoad(false));
  };

  const emailValidator =
    /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;
  const passwordValidator = /.{6,}/g;

  const handleSignin = () => {
    if (emailValidator.test(email) && passwordValidator.test(password)) {
      setIsLoad(true);
      postUseAuth();
    } else {
      setFormatInvalid(true);
      setTimeout(() => setFormatInvalid(false), 3000);
    }
  };

  return {handleSignin, userInvalid, formatInvalid, isLoad};
}
