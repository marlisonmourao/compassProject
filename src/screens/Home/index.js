import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import moodList from '../../../components/ListCard/moodList.js'
import Cards from './Cards';

import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={moodList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
        <Cards data={item} 
           onPress={() => navigation.navigate('DayStory')}
        />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  }

});