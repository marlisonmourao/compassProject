import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Alert
} from 'react-native';


import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import {ItemEmoticon} from '../../../components/EmoticonAdd/index';
import getCharacteristicEmoticon from '../../../components/getEmoticon';
import ItemActivities from '../../../components/Activities';
import Loading from '../../../components/Loading';
import {Button} from '../../../components/Button';
import dateFormat from '../../../components/dataFormat';
import {useNavigation} from '@react-navigation/native';
import {addNewDaily, getActivities} from '../../services/service';

export default function AddCard() {
  const [dataActivities, setDataActivities] = useState();

  const [listDataActive, setListDataActive] = useState([]);
  const [isActiveEmoticon, setIsActiveEmoticon] = useState([]);
  const {hoursFull, dateFull} = dateFormat(new Date());

  const navigation = useNavigation();

  const [dataSaved, setDataSaved] = useState({
    daily_entry: {
      mood: '',
      activity_ids: [],
      description: '',
    },
  });

  React.useEffect(() => {
    async function getResponseActivities() {
      const dataResponseActivities = await getActivities();
      setDataActivities(dataResponseActivities);
    }
    getResponseActivities();
  }, []);

  function handleSaved() {
    const daily_entry = {
      mood: dataSaved?.daily_entry?.mood,
      activity_ids: dataSaved?.daily_entry?.activity_ids,
      description: dataSaved?.daily_entry?.description,
    };

    if (daily_entry.mood === '') {
      Alert.alert('Mood', 'Por favor, selecione uma emoção');
      return
    }

    if (daily_entry.activity_ids.length === 0) {
      Alert.alert('Activities',' Por favor, selecione pelo menos uma atividade');
      return
    }

    if (daily_entry.description === '') {
      Alert.alert('Descrição', 'Por favor, digite uma descrição');
      return
    }

    addNewDaily({daily_entry});
    navigation.navigate('Homes');
  }

  

  return dataActivities ? (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={130}>
      <Modal>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.item__backClose}>
              <Icon name="x" size={30} style={styles.item__backClose.icon} />
            </TouchableOpacity>

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Como voce esta ?</Text>
            </View>

            <View style={styles.containerTime}>
              <View style={styles.containeData}>
                <Icon name="calendar" style={styles.iconCalendar} />
                <Text style={styles.TextData}>{dateFull}</Text>
              </View>

              <View style={styles.containeData}>
                <Icon name="clock" style={styles.iconCalendar} />
                <Text style={styles.TextData}>{hoursFull}</Text>
              </View>
            </View>
          </View>

          <View style={styles.emoticons}>
            {getCharacteristicEmoticon().map(
              ({text, emoticon, color, emoticonText}, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setIsActiveEmoticon(index);
                      setDataSaved(value => ({
                        daily_entry: {
                          ...value.daily_entry,
                          mood: emoticonText,
                        },
                      }));
                    }}>
                    <ItemEmoticon
                      style={
                        isActiveEmoticon === index && styles.emoticons.active
                      }
                      key={index}
                      text={text}
                      color={isActiveEmoticon === index ? color : '#969696'}
                      emoticon={emoticon}
                    />
                  </TouchableOpacity>
                );
              },
            )}
          </View>

          <View style={styles.activities}>
            {dataActivities.map(({id, name}, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (listDataActive.length < 3) {
                      setListDataActive([...listDataActive, id]);

                      setDataSaved(value => ({
                        daily_entry: {
                          ...value.daily_entry,
                          activity_ids: [...value.daily_entry.activity_ids],
                        },
                      }));
                    }
                    if (listDataActive.includes(id)) {
                      const fullListActives = listDataActive.filter(active => {
                        return active !== id;
                      });
                      setListDataActive([...fullListActives]);

                      setDataSaved(value => ({
                        daily_entry: {
                          ...value.daily_entry,
                          activity_ids: [fullListActives],
                        },
                      }));
                    }
                  }}>
                  <ItemActivities
                    key={index}
                    name={name}
                    style={
                      listDataActive.includes(id) && styles.activities.active
                    }
                    color={listDataActive.includes(id) ? '#eee' : '#111'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.containerInputButton}>
            <TextInput
              multiline={true}
              style={styles.inputAdd}
              placeholder="Escreva aqui o que aconteceu hoje..."
              onChangeText={description => {
                setDataSaved(value => ({
                  daily_entry: {
                    ...value.daily_entry,
                    description: description,
                  },
                }));
              }}
            />

            <Button
              style={styles.buttonAdd}
              props="Salvar"
              onPress={() => {
                handleSaved();
              }}
            />
          </View>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  ) : (
    <Loading />
  );
}
