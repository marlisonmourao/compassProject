import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

export default function Contact({email, gender, birthdate}) {
    return (
        <View style={styles.contactWrapper}>
            <Text
                style={styles.contactText}
            >
                E-MAIL: <Text>{email}</Text>
            </Text>

            <Text
                style={styles.contactText}
            >
                GÊNERO: <Text>{gender}</Text>
            </Text>

            <Text
                style={styles.contactText}
            >
                DATA DE NASCIMENTO: <Text>{birthdate}</Text>
            </Text>
        </View>
    );
}