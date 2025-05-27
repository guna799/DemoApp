import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.hello}>Hello User</Text>
        <Text style={styles.welcome}>Welcome to Demo App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  hello: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  welcome: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
});

export default App;

