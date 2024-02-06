import {DataProps} from '../constants/interfaces';

export function GetValuesFromData(data: DataProps[]) {
  const values = data.map((d: DataProps) => {
    return d.value;
  });
  return values;
}

export function GetColorsFromData(data: DataProps[]) {
  const colors = data.map((d: DataProps) => {
    return d.color;
  });
  return colors;
}

export function GetDividersRotateDegrees(data: DataProps[]) {
  const valuesBefore = 0;
  const valuesSum = data.reduce((a: number, b: DataProps) => a + b.value, 0);
  let degrees: number[] = [];
  data.forEach((d: DataProps) => {
    degrees.push(
      (d.value / valuesSum) * 360 + (degrees[degrees.length - 1] || 0),
    );
  });
  return degrees;
}
