import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
