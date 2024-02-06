import {Dimensions, View} from 'react-native';
import {PieChartProps} from './constants/interfaces';
import PieChartBlock from './components/PieChartBlock';

const width = Dimensions.get('screen').width;

export default function PieChart(props: PieChartProps) {
  const componentWidth = width * 0.9;
  const outterChartWidth = 1 - 0.4;
  const innerChartWidth = 1 - 0.3;
  return (
    <View
      style={{
        width: componentWidth,
        aspectRatio: 1,
      }}>
      <PieChartBlock
        data={props.data}
        componentWidth={componentWidth}
        outterChartWidth={outterChartWidth}
      />
      <PieChartBlock
        data={props.data}
        componentWidth={componentWidth * outterChartWidth * 1.01}
        outterChartWidth={innerChartWidth}
        shadow={true}
      />
    </View>
  );
}
