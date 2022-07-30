import React from 'react';
import {Image, Text} from 'react-native';
import styles from './style';

export default function Header({urlPhoto, name}) {
  return (
    <>
      <Image style={styles.imgWrapper} source={{uri: `${urlPhoto}`}} />

      <Text style={styles.welcomeText}>Olá, {name}</Text>
    </>
  );
}
