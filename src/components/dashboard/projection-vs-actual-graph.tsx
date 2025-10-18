import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { StackedGraphData } from '../../data/stacked-graph-data';
import { GraphXAxis } from '../graph/x-axis';
import { GraphYAxis } from '../graph/y-axis';
import { GraphCartesianGrid } from '../graph/cartesian-grid';
import { DataContainer } from './data-container';
import { useTheme } from '../../context/theme-context';
import { motion } from 'framer-motion';

const headingChild = <p className='text-sm font-semibold text-black dark:text-white'>Projections vs Actuals</p>

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
                <BarChart data={StackedGraphData} barCategoryGap={20} barGap={0}>
                    <GraphCartesianGrid />
                    <GraphXAxis dataKeyName="month" />
                    <GraphYAxis />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: 'transparent' }}
                    />
                    <Bar
                        dataKey="actual"
                        stackId="stack"
                        fill="#A8C5DA"
                        barSize={32}
                        radius={[0, 0, 0, 0]}
                        name="Actual"
                    />
                    <Bar
                        dataKey="projection"
                        stackId="stack"
                        fill="#CFDFEB"
                        barSize={32}
                        radius={[4, 4, 0, 0]}
                        name="Projection"
                    />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export const ProjectionsVsActualsGraph = () => {
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

export default ProjectionsVsActualsGraph;