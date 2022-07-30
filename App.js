import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="litle-content" />
      <Routes />
    </>
  );
};

export default App;
