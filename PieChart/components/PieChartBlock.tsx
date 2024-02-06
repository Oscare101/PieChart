import {View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {GetColorsFromData, GetValuesFromData} from '../functions/functions';

export default function PieChartBlock(props: any) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
      }}>
      <PieChart
        widthAndHeight={props.componentWidth}
        series={GetValuesFromData(props.data)}
        sliceColor={GetColorsFromData(props.data)}
        coverRadius={props.chartWidth || null}
        coverFill={props.backgroundColor}
      />
      {props.shadow ? (
        <>
          <View
            style={{
              position: 'absolute',
              width: props.componentWidth,
              height: props.componentWidth,
              backgroundColor: '#00000020',
              borderRadius: props.componentWidth,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: props.componentWidth * props.chartWidth,
              height: props.componentWidth * props.chartWidth,
              backgroundColor: props.backgroundColor,
              borderRadius: props.componentWidth,
              zIndex: 2,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
