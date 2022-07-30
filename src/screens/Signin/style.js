import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#304FFE',
    },
    containerLogo: {
      justifyContent: 'center',
      marginBottom: 60,
    },
    imageLogin: {
      width: 250,
      height: 228,
    },
    containerInputs: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%'
    },
    inputs: {
      backgroundColor: '#fff',
      width:'85%',
      height: 46,
      fontSize: 17,
      padding: 10,
      marginBottom: 15,
      color: 'blue',
      borderRadius: 10,
      padding: 10,
      color: '#000',
  
    },
    btnSubmit: {
      backgroundColor: '#C6CEFF',
      width: 135,
      height: 46,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 30,
    },
    submitTexte: {
      color: '#304FFE',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 40
    }
  
  });

  
  export default styles;