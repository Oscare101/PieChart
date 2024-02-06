import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import PieChart from './PieChart/PieChart';

const width = Dimensions.get('screen').width;

export default function App() {
  const data = [
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
  ];

  return (
    <View style={styles.container}>
      <PieChart data={data} componentWidth={width * 0.6} titles={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#111',
  },
});
