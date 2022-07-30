import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const IconsLin = {
    party: {
        nome: 'festa',
        image: require('../../assets/atividades/party.png')
    },
    sport: {
        nome: 'esportes',
        image: require('../../assets/atividades/sports.png')
    },
    cook: {
        nome: 'cozinhar',
        image: require('../../assets/atividades/cooking.png')
    },
}

const IconsHome = (props) => {
    const actionSize = props.data.length
    return (
        <View style={{flexDirection: 'row'}}>
            {props.data.map((value, i) => (
                <View style={{flexDirection: 'row'}} key={i}>
                    <Image style= {{width: 20, height: 20,}} source={IconsLin[value].image}/>
                    <Text style={styles.list}>{IconsLin[value].nome}</Text>
                    {props.data[actionSize - 1] !== value && (<Text style={styles.blackPoint}> • </Text>)}
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    list:{
        paddingLeft: 8.51,
        color: 'black',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '900',
    },
    blackPoint:{
        paddingHorizontal: 5,
        fontWeight: '900',
        color: 'black',
    },
})

export default IconsHome