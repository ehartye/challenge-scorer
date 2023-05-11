import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import Score from './Score';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// This is a new Score component.
const Score = () => {
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Master Piece Scorer!</Text>
      <Score />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 20,
    marginTop: 20,
  },
});
