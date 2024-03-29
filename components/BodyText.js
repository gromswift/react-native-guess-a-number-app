import React from 'react';
import { StyleSheet, Text } from 'react-native';

function BodyText({children, style}) {
  return (
    <Text style={{ ...styles.body, ...style }}>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;