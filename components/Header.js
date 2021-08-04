import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{ props.title }</Text>
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
    fontSize: 18,
    color: 'black'
  }
});

export default Header;