import { StyleSheet } from "react-native";
import { SourceSansProBold } from '../../../assets/fonts/SourceSansPro-Bold.ttf'
const styles = StyleSheet.create({
    containerDad: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DCDCDC',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -70,
  
    },
    iconNeutral: {
      alignItems: 'center',
    
    },
    text: {
      fontSize: 18,
      lineHeight: 23,
      textAlign: 'center',
      margin: 85,
      marginTop: 20,
      color: '#808080',
      width: 300,
      // fontFamily: SourceSansProBold
    },
  });

  export default styles