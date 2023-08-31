import { Typography } from "@mui/material";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { randInt } from "three/src/math/MathUtils.js";

const randCreateCount = () => randInt(10, 20)

const data = [
    {
        createAt: '2022-10-11',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-12',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-13',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-14',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-15',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-16',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-17',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-18',
        count: randCreateCount() 
    },
    {
        createAt: '2022-10-19',
        count: randCreateCount() 
    },
]

const TaskCreateBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="createAt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TaskCreateBarChart
