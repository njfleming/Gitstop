import React from 'react';
import { Button, Text, View, Image, StyleSheet} from 'react-native';

export default ({history}) => {
  return (
    <View >
      <Image></Image>
      <Text>Repos Page!</Text>
      <Button title="change page" onPress={() => history.push("/")}/>
    </View>
  );
};