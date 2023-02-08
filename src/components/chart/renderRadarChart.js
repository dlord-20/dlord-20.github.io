import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import CustomToolTip from "./customToolTip";
  
  export default function RenderRadarChart({ data }) {
    return (
      <ResponsiveContainer width="99%" height={400}>
        <RadarChart  
            cx="50%" 
            cy="50%" 
            outerRadius="80%" 
            data={data}
        >
            <PolarGrid/>
            <PolarAngleAxis dataKey="subject"/>
            <PolarRadiusAxis />
            <Radar name="Derek" dataKey="A" stroke="#000" fill="#888" fillOpacity={0.6} />
            <Tooltip content={<CustomToolTip/>}/>
            <Legend stroke="#000"/>
        </RadarChart>
      </ResponsiveContainer>
    );
  }