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
      <ResponsiveContainer width="95%" maxHeight={400}>
        <LineChart
          data={data}
        >
            <Line type="monotone" dataKey="Skills" stroke="#000"/>
          <CartesianGrid stroke="#000"/>
          <XAxis dataKey="name" stroke="#000"/>
          <YAxis />
          <Tooltip content={<CustomToolTip/>}/>
          <Legend stroke="#000"/>
        </LineChart>
      </ResponsiveContainer>
    );
  }