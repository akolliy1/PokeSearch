import React from 'react';
import { Image, View } from 'react-native';

const tenor = require('../assets/icons/tenor.gif');

class PokeLoader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.img} source={tenor} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1 
  },
  img: {
      width: 400,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center'
  }
};

export default PokeLoader;
