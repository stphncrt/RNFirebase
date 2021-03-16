import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const LoginPage = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          margin: 5,
        }}>
        Login
      </Text>
      <View
        style={{
          backgroundColor: '#eceff1',
          margin: 5,
          boderRadius: 5,
        }}>
        <TextInput placeholder="Type your mail.." />
      </View>
      <View
        style={{
          backgroundColor: '#eceff1',
          margin: 5,
          boderRadius: 5,
        }}>
        <TextInput placeholder="Type your password.." />
      </View>
      <View style={{margin: 5}}>
        <Button title="Sign In" />
      </View>
      <View style={{margin: 5}}>
        <Button title="Sign Up" />
      </View>
    </View>
  );
};

export default LoginPage;
