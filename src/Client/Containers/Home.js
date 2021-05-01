import React from 'react';
import { Button, Text, View} from 'react-native';

export default ({history}) => {
  return (
    <View>
      <Text>Home!</Text>
      <Button title="change page" onPress={() => history.push("/")}/>
    </View>
  );
};