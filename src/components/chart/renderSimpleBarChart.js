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

    const renderColorfulLegendText = (value, entry) => {
        const { color } = entry;
      
        return <span style={{ color }}>{value}</span>;
      };

    return (
      <ResponsiveContainer width="99%" minWidth="0" height={400}>
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
            <CartesianGrid horizontal="false" />
            <XAxis type="number" dataKey="name" axisLine={false} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} strokeWidth={0.5} stroke="#000"/>
            <YAxis width={40} type="category" dataKey="name"/>
            <Tooltip content={<CustomToolTip />}  wrapperStyle={{ outline: "none" }}/>
            <Legend 
                payload={[{value: 'Years of Experience', type: 'square', color: "#8884d8"}]}
                // formatter={{renderColorfulLegendText}}
                formatter={(value, entry, index) => <span style={{color: "#000"}}>{value}</span>}

            />
            <Bar dataKey="experience" fill="#8884d8" animationDuration={1000}/>
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }