import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export default App;
