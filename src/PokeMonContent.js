import React from 'react';
import { Text, ScrollView, View, Image, Dimensions, ImageBackground } from 'react-native';
import { ListItem, List } from 'native-base';

const bgImage = require('../assets/icons/raids_loading.png');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class PokeMonContent extends React.Component {
  render() {
      const pokemon = this.props.data
      if (!pokemon) {
          return <View />
      }
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={bgImage}
        >
            <ScrollView style={styles.container}>
                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.innerWrapper}>
                    <Image
                        source={{uri: pokemon.sprites.front_default}}
                        style={styles.img}
                    />
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                        <Text style={{ fontWeight: 'bold' }}>Size</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weight - {pokemon.weight}</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Height - {pokemon.height/10}m</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                    </ListItem>
                    <List
                        dataArray={pokemon.abilities}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item.ability.name}</Text>
                            </ListItem>
                        }
                    >
                    </List>
                </View>
            </ScrollView>
        </ImageBackground>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
    width: width
  },
  container: {
    flex: 1 
  },
  header: {
      fontSize: 30,
      color: 'red',
      textAlign: 'center'
  },
  innerWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
  img: {
      height: 200,
      width: 200,
      justifyContent: 'center'
  },
  info: {
       flex: 1,
       backgroundColor: 'white',
       opacity: 0.8
  }
};

export default PokeMonContent;
