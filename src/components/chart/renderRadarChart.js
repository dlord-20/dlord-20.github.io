import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import CustomToolTip from "./customToolTip";
  
  export default function RenderRadarChart({ data }) {
    return (
        <ResponsiveContainer 
            width="99%" 
            height={400}
        >
            <RadarChart  
                cx="50%" 
                cy="50%" 
                outerRadius="80%" 
                data={data}
            >
                <PolarGrid 
                    stroke="#bcbfbd"
                />
                <PolarAngleAxis 
                    dataKey="subject" 
                    stroke="#D9D9D9"
                />
                <Radar 
                    name="Derek"
                    dataKey="A"
                    stroke="#2d5c72" 
                    fill="#f03a39" 
                    fillOpacity={0.9} 
                />
                <Tooltip 
                    cursor={{ stroke: "#D9D9D9", strokeWidth: 1}} content={<CustomToolTip/>} wrapperStyle={{ outline: "none" }}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
  }