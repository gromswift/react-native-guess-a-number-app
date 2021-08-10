import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import Colors from '../constants/colors';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
});

export default GameOverScreen;