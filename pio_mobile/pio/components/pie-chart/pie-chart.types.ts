export type DataItem = {
    name: string;
    color: string;
    [key: string]: any;
};

export type CustomPieChartProps = {
    data: DataItem[];
    accessor: string;
    title: string;
};