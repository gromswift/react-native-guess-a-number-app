import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

function Header(props) {
  return (
    <View style={styles.header}>
      <TitleText>{ props.title }</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    paddingTop: 36,
  },
  headerTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'black'
  }
});

export default Header;