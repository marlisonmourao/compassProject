import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cards: {
      backgroundColor: 'white',
      width: 360,
      height: 158,
      borderRadius: 20,
      padding: 20,
      marginHorizontal: 28,
      marginVertical: 15,
      alignSelf: 'center',
    
    },
    container2: {
      flexDirection: 'row',
  
    },
    date: {
      color: '#ACACAC',
      fontSize: 16,
      left: 15
    },
    humor: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 25,
      letterSpacing: 0.6,
      lineHeight: 20,
      fontWeight: 'bold',
    },
    hours: {
      fontSize: 14,
      color: '#ACACAC',
      lineHeight: 25,
      fontWeight: 'bold',
      marginHorizontal: 7,
      marginVertical: 8,
    },
    container3: {
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
      left: 72,
      marginTop: 16
    },
    containerIconsHome: {
      marginTop: 16,
      marginBottom: 10,
    },
    description: {
      fontSize: 13,
      lineHeight: 25,
      fontWeight: '400',
      color: '#ACACAC',
    
  }
  });
  
  export default styles;