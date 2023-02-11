import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Line
  } from "recharts";
import CustomToolTip from "./customToolTip";
  
  export default function RenderLineChart({ data }) {
    return (
      <ResponsiveContainer 
        width="99%" 
        maxHeight={400} className="test-chart"
      >
        <LineChart
          data={data}
          className="test-chart"
        >
          <Line 
            type="monotone" dataKey="Skills" 
            stroke="#000"
          />
          <CartesianGrid 
            stroke="#000"
          />
          <XAxis 
            dataKey="name" 
            stroke="#000"
          />
          <YAxis />
          <Tooltip 
            content={<CustomToolTip/>}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    );
  }