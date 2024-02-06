export interface DataProps {
  value: number;
  color: string;
}

export interface PieChartProps {
  data: DataProps[];
  backgroundColor?: string;
}
