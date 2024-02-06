import {Dimensions, View} from 'react-native';
import {PieChartProps} from './constants/interfaces';
import PieChartBlock from './components/PieChartBlock';
import Dividers from './components/Dividers';

const width = Dimensions.get('screen').width;

export default function PieChart(props: PieChartProps) {
  const componentWidth = width * 0.9;
  const outterChartWidth = 1 - 0.4;
  const innerChartWidth = 1 - 0.3;
  const dividerLength = 2;
  const backgroundColor = props.backgroundColor || '#eee';
  return (
    <View
      style={{
        width: componentWidth,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <PieChartBlock
        data={props.data}
        componentWidth={componentWidth}
        outterChartWidth={outterChartWidth}
        backgroundColor={backgroundColor}
      />
      <PieChartBlock
        data={props.data}
        componentWidth={componentWidth * outterChartWidth * 1.01}
        outterChartWidth={innerChartWidth}
        backgroundColor={backgroundColor}
        shadow={true}
      />
      <Dividers
        data={props.data}
        componentWidth={componentWidth}
        dividerLength={dividerLength}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
