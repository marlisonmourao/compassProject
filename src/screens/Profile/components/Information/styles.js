import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contactWrapper: {
        width: '85%',
        alignItems: 'flex-start',
    },
    textTopInput: {
        color: 'black',
        fontSize: 15,
        lineHeight: 19,
        textTransform: 'uppercase',
        marginVertical: 8
    },
    inputBg: {
        height: 44,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        paddingHorizontal: 17,
        textTransform: 'uppercase',
        justifyContent: 'center',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    sectionList: {
        backgroundColor: 'white',
        height: 132,
        width: '85%',
        position: 'absolute',
        alignSelf: 'center'
    },
    genderOption: {
        height: '33.33%',
        borderBottomWidth: 1.8,
        borderLeftWidth: 1.8,
        borderRightWidth:1.8,
        justifyContent: 'center',
        paddingHorizontal: 17,

    },
    sectionListText: {
        color: 'black',
        textTransform: 'uppercase'
    },
    btn: {
        backgroundColor: '#304FFE',
        width: '85%',
        height: 52,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    btnText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        lineHeight: 19
    }
})

export default styles;