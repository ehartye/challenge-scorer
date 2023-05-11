// Example: Score.js with state
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Score = () => {
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text>Score:{score}</Text>
    </View>
  );
};

export default Score;
