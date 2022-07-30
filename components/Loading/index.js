import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loading({visible}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'white'} animating={true} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#304FFE',
  },
});
