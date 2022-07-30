import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActivitiesConfig from './ActivitiesConfig';

function ItemActivities({id, name, style, color}) {
  const {iconsOfActivities, namesOfActivities} = ActivitiesConfig();
  return (
    <View style={styles.activities__item}>
      <View style={[styles.box__icon, style]}>
        <MaterialIcons
          key={id}
          name={iconsOfActivities[name]}
          style={[styles.activities__icon, {color: color}]}
        />
      </View>
      <View>
        <Text style={styles.activities__text}>{namesOfActivities[name]}</Text>
      </View>
    </View>
  );
}

export default ItemActivities;
