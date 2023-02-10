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
      <ResponsiveContainer width="99%" minWidth="0" height={250}>
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
                domain={[0, 5]} 
                ticks={[0, 1, 2, 3, 4, 5]} 
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
                cursor={{ stroke: "#D9D9D9", strokeWidth: 1, fill: "#023047"}} content={<CustomToolTip />}  wrapperStyle={{ outline: "none" }}
            />
            <Legend 
                payload={
                    [{value: 'Years of Experience', type: 'square', color: "#FB8500"}]
                }
                formatter={(value, entry, index) => <span style={{color: "#D9D9D9"}}>{value}</span>}
            />
            <Bar 
                dataKey="experience" 
                fill="#FB8500" 
                animationDuration={1000}
            />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }