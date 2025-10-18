import { XAxis as RechartsXAxis } from 'recharts';

interface GraphXAxisProps {
    dataKeyName: string;
}

export const GraphXAxis = ({ dataKeyName }: GraphXAxisProps) => {
    return (
        <RechartsXAxis
            dataKey={dataKeyName}
            axisLine={false}
            tickLine={false}
            tick={{
                fontSize: 12,
                fill: '#6B7280',
                fontWeight: 500
            }}
            tickMargin={8}
        />
    );
};
