import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../components/subjectLayout';
import Header from '../../sections/components/header';
import Return from '../../sections/components/return';
import Description from '../../sections/components/subjectDescription';
import Footer from '../../sections/components/footer';
//import Calendar from '';

const mapStateToProps = state => {
  return {
    selectedSubject: state.selectedSubject,
  };
};

class SubjectDescription extends Component {
  return = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_SUBJECT',
      payload: {
        subject: null,
      },
    });
  };
  render() {
    return (
      <Layout>
        <Header>
          <Return onPress={this.return} />
        </Header>
        <Description {...this.props.selectedSubject} />
        <Footer />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SubjectDescription);
