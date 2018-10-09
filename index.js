//Import a library to help create a component
import React from './node_modules/react';
import { AppRegistry } from './node_modules/react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
    <Header />
); 

// Render it to device
AppRegistry.registerComponent('albums', () => App);
