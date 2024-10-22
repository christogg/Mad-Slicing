import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Header text="Sign Up" />

      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.photoContainer}>
          <Text style={styles.photoText}>Add Photo</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <TextInput label="Full Name" placeholder="Type your full name" />
      <Gap height={16} />
      <TextInput label="Email Address" placeholder="Type your email address" />

      <Gap height={16} />
      <TextInput label="Password" placeholder="Type your password" />

      <Gap height={24} />
      <Button text="Continue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  contentWrapper: {
    marginTop: 50,
    alignItems: 'center',
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  photoText: {
    color: '#C4C4C4',
  },
});

export default SignUp;
