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
                        stroke="#7d7e7d"
                        opacity={.5}
                    />
                    <PolarAngleAxis 
                        dataKey="subject" 
                        stroke="#f9fbf9"
                    />
                    <Radar 
                        name="Derek"
                        dataKey="A"
                        fill="#f03a39" 
                        fillOpacity={0.8} 
                    />
                    <Tooltip 
                        cursor={{ stroke: "#f9fbf9", strokeWidth: 1.5, opacity: .6}} content={<CustomToolTip/>} wrapperStyle={{ outline: "none" }}
                    />
                </RadarChart>
            </ResponsiveContainer>

    );
  }