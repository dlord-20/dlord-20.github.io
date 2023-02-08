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
      <ResponsiveContainer width="99%" minWidth="0" height={400}>
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
          layout="vertical"
        >
            <CartesianGrid horizontal="false" />
            <XAxis type="number" dataKey="name" axisLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} strokeWidth={0.5} stroke="#000"/>
            <YAxis width={40} type="category" dataKey="name"/>
            <Tooltip content={<CustomToolTip />}  wrapperStyle={{ outline: "none" }}/>
            <Legend />
            <Bar dataKey="Skills" fill="#8884d8" animationDuration={1000}/>
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }