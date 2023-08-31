import { ResponsiveContainer, Pie, Tooltip, PieChart } from "recharts";
import { randInt } from "three/src/math/MathUtils.js"

const taskStateDistribution = [
    {
        name: '待标注',
        value: randInt(30, 100)
    },
    {
        name: '进行中',
        value: randInt(30, 100)
    },
    {
        name: '已提交',
        value: randInt(5, 20)
    },
    {
        name: '已完成',
        value: randInt(20, 30)
    },
]

export const TaskProgressPieChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={taskStateDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

const frameProgress = [
    {
        name: '已标注帧',
        value: randInt(80000, 100000)
    },
    {
        name: '未标注帧',
        value: randInt(50000, 60000)
    }
]

export const FrameProgressPieChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={frameProgress}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    label
                />

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}
