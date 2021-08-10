import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function Input(props) {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}>
      { props.children }
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 10
  }
});

export default Input;