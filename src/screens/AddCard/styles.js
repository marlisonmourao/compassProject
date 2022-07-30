import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerTitle: {
    marginTop: 90,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45,
  },

  TextData: {
    textTransform: 'uppercase',
  },
  containerTime: {
    flexDirection: 'row',
    paddingHorizontal: 7,
  },
  containeData: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  iconCalendar: {
    marginHorizontal: 4,
    fontSize: 13,
  },
  containerInputQuestion: {
    width: '80%',
    marginTop: 30,
  },
  item__backClose: {
    position: 'absolute',
    top: 5,
    left: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    borderRadius: 9,
    icon: {
      fontSize: 20,
      color: '#304FFE',
    },
  },
  emoticons: {
    width: 306,
    height: 71,
    margin: 24,
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    active: {
      padding: 20,
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#304FFE',
      margin: -3,
    },
  },

  activities: {
    borderWidth: 1,
    margin: 24,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    active: {
      backgroundColor: '#304FFE',
    },
  },

  containerInputButton: {
    alignItems: 'center',
  },

  inputAdd: {
    width: 340,
    height: 89,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 15,
    fontSize: 13,
    marginBottom: 15,
  },

  buttonAdd: {
    width: 340,
  },
});

export default styles;
