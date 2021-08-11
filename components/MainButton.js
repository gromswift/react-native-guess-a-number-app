import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Color from '../constants/colors';

function MainButton({children, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          { children }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  buttonText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: 'white'
  }
});

export default MainButton;