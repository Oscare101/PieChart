export interface DataProps {
  value: number;
  color: string;
}

export interface PieChartProps {
  data: DataProps[];
  backgroundColor?: string;
  outterChartWidth?: number;
  innerChartWidth?: number;
  dividerWidth?: number;
  componentWidth?: number;
}
