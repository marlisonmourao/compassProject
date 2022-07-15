import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import IconsHome from '../../../components/ListCard/icons';

import styles from './styleCards';



export default function Cards({data, onPress}) {
  const {image, humor, date, hours, desc, actions, color} = data;
  return (
    <TouchableOpacity 
       activeOpacity={0.7} 
       style={styles.cards} 
        onPress={onPress}>

      <View style={styles.container1}>

        <View style={styles.container2}>
        <Image source={image} style={{height: 57, width: 57}} />
          <Text style={styles.date}>{date}</Text>
        </View>

        <View style={styles.container3}>
          <Text 
            style={[styles.humor, {
              color: color
            }]}>
            {humor}
          </Text>

          
          <Text style={styles.hours}>{
            hours}
          </Text>

        </View>

        <View style={styles.containerIconsHome}>
        <IconsHome data={actions}/>
        </View>


        <Text style={styles.description}>{desc}</Text>

      </View>

      <View>
        
      </View>

    </TouchableOpacity>
  );
}