import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = () => {};
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        <TextInput
          placeholder="Type your mail.."
          onChangeText={text => setmail(text)}
        />
      </View>
      <View
        style={{
          backgroundColor: '#eceff1',
          margin: 5,
          boderRadius: 5,
        }}>
        <TextInput
          placeholder="Type your password.."
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{margin: 5}}>
        <Button title="Sign In" onPress={signIn} />
      </View>
      <View style={{margin: 5}}>
        <Button title="Sign Up" onpress={signUp} />
      </View>
    </View>
  );
};

export default LoginPage;
