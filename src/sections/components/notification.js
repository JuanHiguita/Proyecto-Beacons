import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

function NotificationIcon(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../../assets/notificationIcon.jpg')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  icon: {
    height: 85,
    width: 85,
  },
});

export default NotificationIcon;
