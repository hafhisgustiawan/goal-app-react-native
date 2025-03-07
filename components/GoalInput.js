import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalInput = () => {
  return (
    <View style={styles.container}>
      <Text>GoalInput</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoalInput;
