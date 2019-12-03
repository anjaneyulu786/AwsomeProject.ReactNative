import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BgImage from './assets/intro1.jpg'
import Inputs from './input'

  const App = () => {
  return (
    <View style={{width: 360, height: 730, backgroundImage: bgimage}}>
    <View style={styles.container}>
    <Inputs />   
    </View>
    </View>
  );
  }

export default App
const bgimage = BgImage({})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
