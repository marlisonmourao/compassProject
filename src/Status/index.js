import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getDaily } from '../services/service';
import dateFormat from '../../components/dataFormat';
import configEmoticons from '../../components/configEmoticons';
import configActivities from '../../components/configActivities';
import Loading from '../../components/Loading';

function Status({navigation, route}) {
  const idDaily = route.params;''
  const [daily, setDaily] = useState();

  const {hoursFull, dateFull} = dateFormat(daily && daily.created_at);
  const {emoticon, title, color} = configEmoticons(daily && daily.mood);
  const {iconsOfActivities, namesOfActivities} = configActivities();

  useEffect(() => {
    async function componentDidMount() {
      const responseDataDaily = await getDaily(idDaily);
      setDaily(responseDataDaily);
    }
    componentDidMount();
  }, [idDaily]);

  return daily ? (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.item__backLeft}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" style={styles.item__backLeft.icon} />
      </TouchableOpacity>



      <View style={styles.hours}>
        <SimpleLineIcons name="clock" color="#969696" size={14} />
        <Text style={styles.hours.text}>{daily && hoursFull}</Text>
      </View>


      <View style={styles.date}>
        <SimpleLineIcons name="calendar" color="#969696" size={14} />
        <Text style={styles.date.text}>{daily && dateFull}</Text>
      </View>


      <View style={styles.status}>
        <Image style={styles.status.emotion} source={emoticon} />
        <Text style={[styles.status.text, {color: color}]}>{title}</Text>
      </View>


      <View style={styles.options}>
        {daily &&
          daily.activities.map(({id, name}) => {
            return (
              <View key={id} style={styles.options__item}>
                <MaterialIcons
                  name={iconsOfActivities[name]}
                  style={styles.item__icon}
                />
                <Text style={styles.item__text}>{namesOfActivities[name]}</Text>
              </View>
            );
          })}
      </View>
      <View style={styles.description}>
        {daily && (
          <Text style={styles.description.text}>{daily.description}</Text>
        )}
      </View>
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default Status;
