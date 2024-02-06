import {View} from 'react-native';
import {GetDividersRotateDegrees} from '../functions/functions';

export default function Dividers(props: any) {
  return (
    <>
      {GetDividersRotateDegrees(props.data).map(
        (degree: any, index: number) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              transform: [{rotate: `${degree}deg`}],
              width: 0,
              height: 0,
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: -props.dividerLength / 2,
                width: props.dividerLength,
                height: props.componentWidth / 2,
                backgroundColor: props.backgroundColor,
              }}
            />
          </View>
        ),
      )}
    </>
  );
}
