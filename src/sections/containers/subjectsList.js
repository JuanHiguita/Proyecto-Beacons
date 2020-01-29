import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import Layout from '../components/subjectListLayout';
import Empty from '../components/emptyList';
import Subject from '../components/subject';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    list: state.subjects,
  };
};

class SubjectList extends Component {
  renderEmpty = () => <Empty text="No Hay Asignaturas Matriculadas" />;
  keyExtractor = item => item.key.toString();
  viewSubjectInfo = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_SUBJECT',
      payload: {
        subject: item,
      },
    });
  };
  renderSubject = ({item}) => {
    return (
      <Subject
        {...item}
        onPress={() => {
          this.viewSubjectInfo(item);
        }}
      />
    );
  };
  render() {
    /*
        1. crear un componente para cada una de las asignaturas de esa manera
        se vera ordenado y estetico
        2. crear una interfaz para cuando no hayan elementos
    */
    return (
      <Layout title="Asignaturas">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderSubject}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SubjectList);
