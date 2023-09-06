'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TryChart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4,
            pv: 2.4,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3,
            pv: 1.3,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2,
            pv: 9.8,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2.7,
            pv: 3.9,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1.8,
            pv: 4.8,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2.3,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3.4,
            amt: 2100,
        },
    ];
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
            >
                <CartesianGrid stroke="#ccc" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#ca8a04" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#020617" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default TryChart
