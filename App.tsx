import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import PieChart from './PieChart/PieChart';

const width = Dimensions.get('screen').width;

export default function App() {
  const data = [
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
    {value: 2, color: '#a0a'},
    {value: 4, color: '#05a'},
    {value: 5, color: '#a50'},
    {value: 2, color: '#a0a'},
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        backgroundColor="#111"
        outterChartWidth={0.45}
        innerChartWidth={0.3}
        dividerWidth={2}
        shadowColor="#00000050"
        componentWidth={width * 0.9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
});
