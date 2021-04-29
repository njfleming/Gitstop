import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './Client/Containers/Home';
import Login from './Client/Containers/Login';

const App = () => {
  return (
    <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>

        </View>
    </NativeRouter>



  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default App;
