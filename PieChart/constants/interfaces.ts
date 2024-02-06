export interface DataProps {
  value: number;
  color: string;
  title?: string;
}

export interface PieChartProps {
  data: DataProps[];
  backgroundColor?: string;
  outterChartWidth?: number;
  innerChartWidth?: number;
  dividerWidth?: number;
  componentWidth?: number;
  shadowColor?: string;
  titles?: boolean;
  titleLineWidth?: number;
  titleLineColor?: string;
  titleStyles?: any;
  // titleFontSize?: number;
}
