import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image
} from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{uri: 'https://www.meme-arsenal.com/memes/2d403b1a3548ee10f7d8d810ae3d212f.jpg'}}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 150,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center'
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
  }
});

export default GameOverScreen;