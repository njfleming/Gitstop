import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({history}) => {
  return (
    <View>
      <Text>login!</Text>
      <Button title="change page" onPress={() => history.push("/home")} />
    </View>
  );
};