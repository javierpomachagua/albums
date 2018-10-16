//Import a library to help create a component
import React from './node_modules/react';
import { AppRegistry, View } from './node_modules/react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>    
); 

// Render it to device
AppRegistry.registerComponent('albums', () => App);
