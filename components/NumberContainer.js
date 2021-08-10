import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../constants/colors';

function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10
  },
  number: {
    fontSize: 22,
    color: Colors.accent,
    
  }
});

export default Card;