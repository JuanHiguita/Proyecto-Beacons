import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const banner = require('../../../assets/headerBanner.jpg');

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground source={banner} style={styles.banner}>
            <View>
              <Text style={styles.title}>Bienvenido,</Text>
              {/*el nombre de usuario debe ser pasado por props desde el api*/}
              <Text style={styles.text}>Juan Sebastian Higuita</Text>
            </View>
            <View style={styles.button}>{props.children}</View>
          </ImageBackground>
        </View>

        {/*
          1. Insertar la Imagen de fongo
          2. Organizar los mensajes
          3. Insertar el boton de notificaciones
          4. Organizar los estilos del header
          */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: '100%',
    height: 100,
    marginLeft: 30,
    color: 'white',
  },
  container: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
    marginTop: 50,
  },
  banner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
});

export default Header;
