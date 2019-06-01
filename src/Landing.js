import React from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';

const myBackground = require('../assets/icons/landing.jpg');

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBg} source={myBackground}>
          <View style={styles.innerContainer}>
            <Text style={styles.brand}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              onPress={() => this.props.handleClick('search')}
              style={styles.searchBtn}
            >
              <Text style={styles.btnText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 5 : 0
  },
  imageBg: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    fontSize: 30,
    alignItems: 'center',
    color: 'blue'
  },
  searchBtn: {
    margin: 10
  },
  btnText: {
    color: 'white'
  }
};
