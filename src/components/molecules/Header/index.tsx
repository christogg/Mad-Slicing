import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({text, onBack}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  back: {
    fontSize: 20,
    marginRight: 10,
    color: '#020202',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});

export default Header;
