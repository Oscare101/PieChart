import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import PieChart from './PieChart/PieChart';

const width = Dimensions.get('screen').width;

export default function App() {
  const data = [
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
    {value: 2, color: '#a0a', title: 'pink'},
    {value: 4, color: '#05a', title: 'blue'},
    {value: 5, color: '#a50', title: 'orange'},
    {value: 2, color: '#a0a', title: 'pink'},
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
        componentWidth={width * 0.6}
        titles={true}
        titleLineColor="#FFF"
        titleLineWidth={1}
        titleStyles={{color: '#fff', fontWeight: '200'}}
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
