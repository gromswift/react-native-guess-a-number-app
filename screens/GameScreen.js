import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';

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

const renderListItems = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>
      #{ listLength - itemData.index }
    </BodyText>
    <BodyText>
      { itemData.item }
    </BodyText>
  </View>
);

function GameScreen({userChoice, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currGuess, setCurrGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  
  const currLow = useRef(1);
  const currHigh = useRef(100);
  
  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      currLow.current = currGuess + 1;
    }
    const nextNumber = generateRandomBetween(currLow.current, currHigh.current, currGuess);
    setCurrGuess(nextNumber);
    setPastGuesses(prevPastGuesses => [nextNumber, ...prevPastGuesses]);
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
      <View style={styles.listContainer}>
        {/*<ScrollView contentContainerStyle={styles.list}>*/}
        {/*  { renderListItems(pastGuesses) }*/}
        {/*</ScrollView>*/}
        <FlatList
          keyExtractor={item => item.toString()}
          data={pastGuesses}
          renderItem={renderListItems.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
  },
  listContainer: {
    flex: 1,
    width: '60%'
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10
  }
});

export default GameScreen;