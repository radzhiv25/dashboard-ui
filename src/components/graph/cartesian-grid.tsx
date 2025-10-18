import { CartesianGrid as RechartsCartesianGrid } from 'recharts';

export const GraphCartesianGrid = () => {
    return (
        <RechartsCartesianGrid
            strokeDasharray="2 2"
            stroke="#E5E7EB"
            horizontal={true}
            vertical={false}
        />
    );
};
