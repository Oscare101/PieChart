import {Text, View} from 'react-native';
import {GetTitlesRotateDegrees} from '../functions/functions';

export default function Titles(props: any) {
  const titleFontSize =
    props.titleStyles && props.titleStyles.fontSize
      ? props.titleStyles.fontSize
      : 15;

  return (
    <>
      {GetTitlesRotateDegrees(props.data).map((degree: any, index: number) => (
        <View
          key={index}
          style={{
            position: 'absolute',
            transform: [{rotate: `${degree}deg`}],
            width: 0,
            height: 0,
            zIndex: -1,
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: -props.titleLineWidth / 2,
              width: props.titleLineWidth,
              height: (props.componentWidth / 2) * 1.2,
              backgroundColor: props.titleLineColor,
              borderRadius: props.titleLineWidth,
            }}>
            <View
              style={{
                height: titleFontSize * 1.5,
                width: 10,
                // backgroundColor: '#00000020',
                transform: [{rotate: `-${degree}deg`}],
                position: 'absolute',
                top: -titleFontSize * 1.5,
                left: 0,
                alignItems: degree > 180 ? 'flex-end' : 'flex-start',
                overflow: 'visible',
              }}>
              <View
                style={{
                  height: '100%',

                  width: props.componentWidth,
                  // backgroundColor: '#0ff00060',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: degree > 180 ? 'flex-end' : 'flex-start',
                  overflow: 'hidden',
                }}>
                <Text
                  style={[
                    {
                      fontSize: titleFontSize,
                      color: '#000',
                    },
                    {...props.titleStyles},
                  ]}>
                  {props.data[index].title || ''}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
}
