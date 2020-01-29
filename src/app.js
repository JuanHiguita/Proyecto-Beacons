import React, {Component} from 'react';
import {connect} from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SubjectList from './sections/containers/subjectsList';
import SubjectInfo from './screens/containers/subjectInfo';
import Footer from './sections/components/footer';

const subjects = require('../utils/data.json');

const mapStateToProps = state => {
  return {
    selectedSubject: state.selectedSubject,
  };
};

class AppLayout extends Component {
  componentDidMount() {
    // fetch(subjects)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // this.setState({
    //   subjectList: subjects,
    // });
    this.props.dispatch({
      type: 'SET_SUBJECTS_LIST',
      payload: {
        subjects,
      },
    });
  }
  render() {
    if (this.props.selectedSubject) {
      return <SubjectInfo />;
    } else {
      return (
        <Home>
          <Header />
          <SubjectList />
          <Footer />
        </Home>
      );
    }
  }
}

export default connect(mapStateToProps)(AppLayout);
