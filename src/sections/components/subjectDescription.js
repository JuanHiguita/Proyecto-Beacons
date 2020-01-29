import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SubjectDescription(props) {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>Docente: {props.teacher}</Text>
        <Text style={styles.text}>Horario: {props.hour}</Text>
      </View>
      <View style={styles.schedule} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
    color: '#4c4c4c',
  },
  text: {
    fontSize: 20,
    marginLeft: 30,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  schedule: {
    backgroundColor: 'white',
    height: 380,
    margin: 10,
    marginHorizontal: 30,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default SubjectDescription;
