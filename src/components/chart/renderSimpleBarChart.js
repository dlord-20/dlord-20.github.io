import {
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import CustomToolTip from "./customToolTip";
  
  export default function RenderSimpleBarChart({ data }) {

    return (
        <ResponsiveContainer 
            width="99%" 
            minWidth="0" 
            height={250}
        >
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
                layout="vertical"
            >
                <CartesianGrid 
                    horizontal="false" 
                    stroke="#C4C4C4"
                />
                <XAxis 
                    type="number" 
                    dataKey="name" 
                    axisLine={false} 
                    domain={[0, 10]} 
                    ticks={[0, 2, 4, 6, 8, 10]} 
                    strokeWidth={0.5} 
                    stroke="#C4C4C4" 
                />
                <YAxis 
                    width={40} 
                    type="category" 
                    dataKey="name" 
                    stroke="#C4C4C4"
                />
                <Tooltip 
                    cursor={{ stroke: "#fbfefc", strokeWidth: 1, fill: "#2d5c72"}} content={<CustomToolTip />}  wrapperStyle={{ outline: "none" }}
                />
                <Legend 
                    payload={
                        [{value: 'Years of Experience', type: 'square', color: "#59b7e3"}]
                    }
                    formatter={(value, entry, index) => <span style={{color: "#fbfefc"}}>{value}</span>}
                />
                <Bar 
                    dataKey="experience" 
                    fill="#f03a39" 
                    animationDuration={1000}
                />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    );
  }