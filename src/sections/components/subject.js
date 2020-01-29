import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Subject(props) {
  //console.log('subject:', this.props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>Docente: {props.teacher}</Text>
        <Text style={styles.text}>Horario: {props.hour}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    marginHorizontal: 30,
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 30,
  },
  text: {
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 5,
  },
});

export default Subject;
