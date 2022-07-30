import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import { genderTranslate } from '../../../../services/Mocks/general';
import styles from './styles';
import api from '../../../../services/api';

export default function Information({
  name,
  email,
  gender,
  birthdate,
  onPress,
}) {
  const [show, setShow] = useState(false);
  const [selectionGender, setSelectionGender] = useState(gender);

  const putGender = async () => {
    await api
      .put('/user', {
        user: {
          gender: selectionGender,
        },
      })
      .catch(err => console.log('deu erro ' + err));
  };

  return (
    <>
      <View style={styles.contactWrapper}>
        <Text style={styles.textTopInput}>Nome</Text>
        <TextInput
          editable={false}
          defaultValue={name}
          style={styles.inputBg}
        />
      </View>

      <View style={styles.contactWrapper}>
        <Text style={styles.textTopInput}>E-mail</Text>
        <TextInput
          editable={false}
          defaultValue={email}
          style={styles.inputBg}
        />
      </View>

      <View style={styles.contactWrapper}>
        <Text style={styles.textTopInput}>Gênero</Text>
        <TouchableOpacity style={styles.inputBg} onPress={() => setShow(!show)}>
          <Text style={styles.sectionListText}>
            {genderTranslate[selectionGender]}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{zIndex: 1}}>
        <View style={[styles.sectionList, {display: show ? 'flex' : 'none'}]}>
          <TouchableOpacity
            onPress={() => {
              setSelectionGender('male');
              setShow(!show);
            }}
            style={styles.genderOption}>
            <Text style={styles.sectionListText}>
              {genderTranslate.male}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectionGender('female');
              setShow(!show);
            }}
            style={styles.genderOption}>
            <Text style={styles.sectionListText}>
              {genderTranslate.female}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectionGender('other');
              setShow(!show);
            }}
            style={styles.genderOption}>
            <Text style={styles.sectionListText}>
              {genderTranslate.other}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contactWrapper}>
        <Text style={styles.textTopInput}>Data de nascimento</Text>
        <TextInput
          editable={false}
          defaultValue={birthdate}
          style={styles.inputBg}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          onPress.goBack();
          putGender();
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>Salvar</Text>
      </TouchableOpacity>
    </>
  );
}
