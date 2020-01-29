import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SubjectListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#4c4c4c',
    fontSize: 23,
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: 'bold',
  },
});

export default SubjectListLayout;
