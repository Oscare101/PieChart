import React from 'react';
import {StyleSheet, View} from 'react-native';
import PieChart from './PieChart/PieChart';

export default function App() {
  const data = [
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
  ];

  return (
    <View style={styles.container}>
      <PieChart data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
