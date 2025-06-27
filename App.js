import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Colors';

export default class App extends React.Component {

  render () {
      return (
        <View style={styles.container}>
          <View style={{flexDirection: "row"}}>
            <View style={styles.divider}/>
            <Text style={styles.title}>
              TODO <Text style={{fontWeight: '300', color: colors.blue}}>List</Text>
            </Text>
          </View>
        </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64,
  }
});
