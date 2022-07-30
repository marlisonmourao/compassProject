import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export function Button({props, onPress, style}) {
    return <TouchableOpacity 
        style={[styles.button, style]} 
        onPress={onPress}
        
    >
        <Text style={styles.textButton}>
            {props}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#304FFE',
        width: 322,
        height: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
    },
    textButton: {
        fontWeight: '900',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        lineHeight: 19,
        letterSpacing: 0.5,
      },
    
})