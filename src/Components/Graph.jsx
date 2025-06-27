import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    CartesianGrid, ReferenceLine
} from 'recharts';

// Updated data with unique IDs per point (year + quarter)
const data = [
    { id: '2023-Q1', quarter: 'Q1', revenue: 2000000, target: 2000000 },
    { id: '2023-Q2', quarter: 'Q2', revenue: 4000000, target: 5000000 },
    { id: '2023-Q3', quarter: 'Q3', revenue: 7000000, target: 3000000 },
    { id: '2023-Q4', quarter: 'Q4', revenue: 8000000, target: 7000000 },
    { id: '2024-Q1', quarter: 'Q1', revenue: 2000000, target: 6000000 },
    { id: '2024-Q2', quarter: 'Q2', revenue: 4000000, target: 7000000 },
    { id: '2024-Q3', quarter: 'Q3', revenue: 7000000, target: 8000000 },
    { id: '2024-Q4', quarter: 'Q4', revenue: 8000000, target: 8500000 },
];

// Custom tooltip to show revenue and target
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="backdrop-blur-xs bg-white/10 border border-gray-700 rounded-md text-white text-sm shadow-lg p-2">
                <p><strong>{label}</strong></p>
                <p>📈 Revenue: ${payload[0].value.toLocaleString()}</p>
                <p>🎯 Target: ${payload[1].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

export default function Graph() {
    return (
        <div className="w-full h-54 text-xs p-0">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                    <XAxis
                        dataKey="id"
                        stroke="#888"
                        tickFormatter={(value) =>
                            typeof value === 'string' && value.includes('-') ? value.split('-')[1] : value
                        }
                    />
                    <YAxis
                        stroke="#888"
                        tickFormatter={(v) => `$${v / 1000000}M`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine x="2024-Q3" stroke="#aaa" strokeDasharray="4 4" />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#9f67ff"
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#9f67ff' }}
                        animationDuration={600}
                    />
                    <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#f9d43a"
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#f9d43a' }}
                        animationDuration={600}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
