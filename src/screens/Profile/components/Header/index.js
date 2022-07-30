import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import api from '../../../../services/api';

export default function Header({photoUrl, visible}) {
  return (
    <>
      <Image
        style={styles.imgWrapper}
        source={{uri: `${api.defaults.baseURL}${photoUrl}`}}
      />

      <TouchableOpacity onPress={visible} style={styles.photoBtn}>
        <Text style={styles.photoBtnText}>Alterar Foto</Text>
      </TouchableOpacity>
    </>
  );
}
