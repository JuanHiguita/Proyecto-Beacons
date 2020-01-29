import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from './notification';

function Footer(props) {
  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default Footer;
