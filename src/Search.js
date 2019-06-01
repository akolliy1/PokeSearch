import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Header, Input, Left, Body, Right, Button, Icon, Title, Item, } from 'native-base';
import PokeLoader from './PokeLoader';
import PokeMonContent from './PokeMonContent';
import axios from 'axios';

class Search extends React.Component {
    state = {
        inputData: '',
        isLoading: true,
        data: {}
    }

    searchPoke = () => {
        this.setState({ isLoading: true })
        axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.inputData.toLowerCase())
        .then((response) => {
            this.setState({ data: response.data });
            this.setState({ isLoading: false });
        })
        .catch((response) => {
            console.log('error')
        })
    }

    handleContentRendering = () => {
        if (this.state.isLoading) {
            return <PokeLoader />
        }
        return <PokeMonContent data={this.state.data} />
    }

    handleChange = (value) => {
        this.setState({ inputData: value })
    }

  render() {
    return (
      <View style={styles.container}>
          <Header searchBar rounded>
              <Item>
                  <Icon name="ios-search" onPress={() => this.searchPoke()} />
                  <Input
                    placeholder="Search Pokemon"
                    value={this.state.inputData}
                    onChangeText={(value) => this.handleChange(value)}
                    />
                  <Icon name="ios-people" />
              </Item>
          </Header>
          {this.handleContentRendering()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default Search;
