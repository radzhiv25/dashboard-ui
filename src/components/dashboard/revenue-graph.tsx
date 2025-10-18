import { LineChart, Line, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { RevenueGraphData } from '../../data/revenue-graph-data';
import { GraphXAxis } from '../graph/x-axis';
import { GraphYAxis } from '../graph/y-axis';
import { GraphCartesianGrid } from '../graph/cartesian-grid';
import { DataContainer } from './data-container';
import { useTheme } from '../../context/theme-context';
import { motion } from 'framer-motion';

const headingChild = (
    <div className="flex items-center justify-between">
        <p className='text-sm font-semibold text-black dark:text-white'>Revenue</p>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    Current Week <span className="font-bold">$58,211</span>
                </span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#87CEEB' }}></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    Previous Week <span className="font-bold">$68,768</span>
                </span>
            </div>
        </div>
    </div>
)

const graphChild = ({ theme }: { theme: string }) => {
    const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { color: string; name: string; value: number }[]; label?: string }) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`px-3 py-2 rounded-lg border border-black/10 shadow-lg ${theme === 'dark'
                        ? 'bg-gray-800 text-white border-white/20'
                        : 'text-black bg-white'
                        }`}
                >
                    <p className="text-xs font-medium mb-1">{label}</p>
                    {payload.map((entry: { color: string; name: string; value: number }, index: number) => (
                        <div key={index} className="text-xs p-1 flex items-center gap-2" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                            <div className='w-2 h-2 rounded-full' style={{ backgroundColor: entry.color }}></div>
                            <span className="font-medium">{entry.name}:</span>
                            <span className='font-normal'>${entry.value?.toLocaleString()}M</span>
                        </div>
                    ))}
                </motion.div>
            );
        }
        return null;
    };



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <ResponsiveContainer width="100%" height={200} className="sm:min-h-[200px]">
                <LineChart data={RevenueGraphData}>
                    <GraphCartesianGrid />
                    <GraphXAxis dataKeyName="month" />
                    <GraphYAxis />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="previousWeek"
                        fill="#87CEEB"
                        fillOpacity={0.1}
                        stroke="none"
                    />
                    <Line
                        type="monotone"
                        dataKey="currentWeek"
                        stroke="#000000"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: '#000000' }}
                        name="Current Week"
                    />
                    <Line
                        type="monotone"
                        dataKey="previousWeek"
                        stroke="#87CEEB"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: '#87CEEB' }}
                        name="Previous Week"
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export const RevenueGraph = () => {
    const { theme } = useTheme()
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DataContainer headingChild={headingChild} graphChild={graphChild({ theme })} justifyCenter={false} />
        </motion.div>
    );
}

export default RevenueGraph;
