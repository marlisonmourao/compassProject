import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';
import api from '../../../services/api';

const logout = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Signin' }]
    })
}

export default function ModalLogout({ visible, onPress }) {

    const postLogout = async () => {
        await api.post('/oauth/revoke', {
            token: api.defaults.headers.common['Authorization'],
            client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
            client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
        })
            .then(() => {
                logout(onPress);
                api.defaults.headers.common['Authorization'] = ""
            })
            .catch(err => console.log('deu erro ' + err))
            .finally(() => console.log(api.defaults.headers.common['Authorization']))

    }


    return (


        <View style={styles.container}>
            <View style={styles.background}>

                <View>
                    <Text style={[styles.mainText, styles.headerText]}>Atenção</Text>
                    <Text style={styles.aboutHeaderText}>Deseja mesmo sair?</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={visible}
                    >
                        <Text style={[styles.mainText, styles.footerText]}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={postLogout}
                    >
                        <Text style={[styles.mainText, styles.footerText]}>sim</Text>
                    </TouchableOpacity>

                </View>

            </View>


        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    background: {
        backgroundColor: 'white',
        width: '90%',
        height: '23%',
        borderRadius: 25,
        padding: 20,
        justifyContent: 'space-between'
    },
    mainText: {
        color: 'black'
    },
    footerText: {
        textTransform: 'uppercase',
        fontSize: 18,
        lineHeight: 27,
    },
    headerText: {
        fontSize: 24,
        lineHeight: 36
    },
    aboutHeaderText: {
        color: '#969696',
        fontSize: 20,
        lineHeight: 30
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '45%',
        justifyContent: 'space-between'
    }

})