import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Buttons({ onPressProfile, onPressLogout }) {
    return (
        <>
            <TouchableOpacity
                onPress={onPressProfile}
                style={styles.btn}
            >
                <Text style={styles.btnText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPressLogout}
                style={[styles.btn, styles.secondeBtn]}
            >
                <Text style={[styles.btnText, { color: 'black' }]}>Sair</Text>
            </TouchableOpacity>
        </>
    );
}