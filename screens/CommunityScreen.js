import React from 'react';
import {View, Button} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Notification')}/>
    </View>
  );
}

export default LoginScreen;