import React, {useState, useEffect} from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import dateFormat from '../../../components/dataFormat';
import Loading from '../../../components/Loading';
import { getEntriesDailys } from '../../services/service';
import { ActivityContent } from '../ActivityContent';
import ItemStatus from '../../../components/itemStatus';


function Homes({navigation}) {
  const [dailysList, setDailysList] = useState(false);
  
  useEffect(() => {
    async function componentDidMount() {
      const response = await getEntriesDailys();
      setDailysList(response);

    }
    componentDidMount();
  }, [dailysList]);

  const renderItem = ({
    item: {id, mood, created_at, short_description, activities},
  }) => {
    const {hoursFull, dateFull} = dateFormat(created_at);

    return ( 

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Status', id);
        }}>
        <ItemStatus
          emoji={mood}
          description={short_description}
          activities={activities}
          hours={hoursFull}
          date={dateFull}
        />
      </TouchableOpacity>
    );
  };



  return !dailysList ? (
    <Loading />
  ) : dailysList.length === 0 ? (
    <ActivityContent />
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 25}}
        data={dailysList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Homes;
