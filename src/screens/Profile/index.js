import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Modal } from 'react-native';
import Photo from './Modals/photos';
import Header from './components/Header';
import styles from './styles';
import Information from './components/Information';

export default function Profile({ route, navigation }) {
    const { name, email, gender, birthdate, mainPhoto, photoId } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={130}

            enabled={true}
        >
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <Photo visible={() => setModalVisible(!modalVisible)} photoId={photoId}/>
                </Modal>

                <Header photoUrl={mainPhoto} visible={() => setModalVisible(true)} />

                <Information
                    onPress={navigation}
                    name={name}
                    email={email}
                    birthdate={birthdate}
                    gender={gender}
                />

            </View>

        </KeyboardAvoidingView>
    );
}
