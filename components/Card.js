import React from 'react';
import {StyleSheet, View} from 'react-native';

function Card(props) {
  return (
    <View style={ {...styles.card, ...props.style} }>
      { props.children }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    padding: 20
  }
});

export default Card;