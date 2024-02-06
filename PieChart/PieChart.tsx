import {Dimensions, View} from 'react-native';
import {PieChartProps} from './constants/interfaces';
import PieChartBlock from './components/PieChartBlock';
import Dividers from './components/Dividers';
import defaultValues from './constants/defaultValues';

const width = Dimensions.get('screen').width;

export default function PieChart(props: PieChartProps) {
  const componentWidth = props.componentWidth || width * 0.9;
  const outterChartWidth =
    1 -
    (props.outterChartWidth
      ? props.outterChartWidth
      : defaultValues.outterChartWidth);
  const innerChartWidth =
    1 -
    (props.innerChartWidth
      ? props.innerChartWidth
      : defaultValues.innerChartWidth);
  const dividerWidth = props.dividerWidth || 2;
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
        chartWidth={outterChartWidth}
        backgroundColor={backgroundColor}
      />
      {props.innerChartWidth !== 0 ? (
        <PieChartBlock
          data={props.data}
          componentWidth={componentWidth * outterChartWidth * 1.01}
          chartWidth={innerChartWidth}
          backgroundColor={backgroundColor}
          shadow={true}
          shadowColor={props.shadowColor}
        />
      ) : (
        <></>
      )}

      {props.data.length > 1 && props.dividerWidth !== 0 ? (
        <Dividers
          data={props.data}
          componentWidth={componentWidth}
          dividerWidth={dividerWidth}
          backgroundColor={backgroundColor}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
