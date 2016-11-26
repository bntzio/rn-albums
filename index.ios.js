/* index.ios.js - place code in here for ios */

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header headerText={'Albums'} />
);

AppRegistry.registerComponent('albums', () => App);
