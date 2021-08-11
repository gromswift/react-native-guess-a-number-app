import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

function GameScreen({userChoice, onGameOver}) {
  const [currGuess, setCurrGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  
  const currLow = useRef(1);
  const currHigh = useRef(100);
  
  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currGuess, userChoice, onGameOver]);
  
  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currGuess < userChoice) ||
      (direction === 'greater' && currGuess > userChoice)
    ) {
      Alert.alert(
        'Don\'t lie!',
        'You know that this is wrong...',
        [{ text: 'Sorry', style: 'cancel' }]
      );
      return;
    }
    if (direction === 'lower') {
      currHigh.current = currGuess;
    } else {
      currLow.current = currGuess;
    }
    const nextNumber = generateRandomBetween(currLow.current, currHigh.current, currGuess);
    setCurrGuess(nextNumber);
    setRounds(currRounds => currRounds + 1);
  }
  
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>
        { currGuess }
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
    maxWidth: '90%',
    marginTop: 20
  }
});

export default GameScreen;