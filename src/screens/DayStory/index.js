import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';


import happy from '../../../assets/humores/happy.png';
import cooking from '../../../assets/icon/cooking_white.png';
import football from '../../../assets/icon/football_white.png';
import party from '../../../assets/icon/party_white.png';
import buttonLeft from '../../../assets/icon/buttonLeft.png'

import styles from './style';

export function DayStory() {
  const navigation = useNavigation();
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerGoBack}>

       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={buttonLeft}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View style={styles.containerIconHours}>
          <Icon name="clock" 
            style={styles.iconClock}  
          />
          <Text style={styles.hours}>08:35</Text>
        </View>

        <View style={styles.containerIconDate}>
          <Icon name="calendar" style={styles.iconCalendar} />
          <Text style={styles.date}>HOJE, 23 DE JANEIRO</Text>
        </View>
        
        <Image source={happy} style={styles.imageHappy} />
        <Text style={styles.textHumor}>BEM</Text>
      </View>

      <View style={styles.containerIcons}>
        <View style={styles.containerRow}>
          <View style={styles.containerIcons}>
            <View style={styles.iconBackgroud}>
              <Image source={party} />
            </View>
            <Text style={styles.descriptionIcon}>festa</Text>
          </View>
          <View style={styles._container_view_icones}>
            <View style={styles.iconBackgroud}>
              <Image
                source={football}
              />
            </View>
            <Text style={styles.descriptionIcon}>esporte</Text>
          </View>
          <View style={styles._container_view_icones}>
            <View style={styles.iconBackgroud}>
              <Image source={cooking} />
            </View>
            <Text style={styles.descriptionIcon}>cozinhar</Text>
          </View>
        </View>
        </View>


      <View style={styles.containerDescription}>
        <Text style={styles.textDescription}>
          Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma
          lasanha para minha família. E à noite, fui à festa de aniversário do
          meu amigo.
        </Text>
      </View>
    </View>
  );
}