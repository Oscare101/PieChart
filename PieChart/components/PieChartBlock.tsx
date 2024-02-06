import {View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {GetColorsFromData, GetValuesFromData} from '../functions/functions';
import styles from '../constants/styles';

export default function PieChartBlock(props: any) {
  return (
    <View style={styles.absoluteCenter}>
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
              backgroundColor: props.shadowColor || '#00000020',
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
