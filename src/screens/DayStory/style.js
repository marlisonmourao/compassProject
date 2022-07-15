import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    marginTop: 20,
  },
  hours: {
    color: '#969696',
    width: 36,
    height: 24,
    marginBottom: 8,
  },
  imageHappy: {
    width: 70,
    height: 70,
    marginTop: 20,
  },
  textHumor: {
    marginTop: 16,
    marginBottom: 15,
    letterSpacing: 0.5,
    fontweight: 'bold',
    color: 'red',
  },
  containerIcons: {
    width: 380,
    height: 158,
    backgroundColor: 'blue',
    marginTop: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 380,
    height: 158,
    borderRadius: 20,
  },
  containerIcons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackgroud: {
    backgroundColor: '#304FFE',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  descriptionIcon: {
    fontWeight: 'bold',
  },
  containerDescription: {
    backgroundColor: '#FFFFFF',
    width: 380,
    height: 95,
    marginTop: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDescription: {
    fontSize: 14,
    width: 320,
    height: 63,
    fontWeight: 'bold',

  },
  containerGoBack: {
    alignSelf: 'flex-start',
    padding: 10
  },
  icon: {
   width:40,
    height:40
  },
  containerIconHours: {
    flexDirection: 'row',
  },
  iconClock: {
    top: 4,
    marginHorizontal: 5,
    fontSize: 13
  },
  containerIconDate: {
    flexDirection: 'row',
  },
  iconCalendar: {
    top: 4,
    marginHorizontal: 5,
    fontSize: 13
  },
});

export default styles;
