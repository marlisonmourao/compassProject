import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    goBack: {
        marginTop: 11,
        alignSelf: 'flex-start',
        marginLeft: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 24,
        lineHeight: 36,
        marginTop: 65
    },
    imgWrapper: {
        width: 92,
        height: 92,

    },
    lineWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    imgGroup: {
        flex: 1 / 3,
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    btn: {
        backgroundColor: '#304FFE',
        width: '85%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        position: 'absolute',
        bottom: 150
    },
    btnText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        lineHeight: 19
    },
    activityBg: {
        borderColor: 'rgba(48, 79, 254, 1)',
        backgroundColor: 'rgba(48, 79, 254, 1)',
    },
    moodPress: {
        backgroundColor: 'rgba(48, 79, 254, 0)',
        borderWidth: 5,
        borderRadius: 50,
        borderColor: 'rgba(48, 79, 254, 0)',

    },

})

export default styles;