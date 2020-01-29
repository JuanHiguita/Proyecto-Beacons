import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function Return(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.button}> {'<'} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  container: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    width: 30,
    height: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Return;
