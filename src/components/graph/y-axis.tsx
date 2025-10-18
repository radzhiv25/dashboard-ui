import { YAxis as RechartsYAxis } from 'recharts';

export const GraphYAxis = () => {
    return (
        <RechartsYAxis
            axisLine={false}
            tickLine={false}
            tick={{
                fontSize: 12,
                fill: '#6B7280',
                fontWeight: 500
            }}
            tickMargin={8}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
        />
    );
};
