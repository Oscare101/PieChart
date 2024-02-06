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
