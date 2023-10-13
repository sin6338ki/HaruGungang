import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, LabelList, Tooltip } from "recharts";

const Chart = ({data}) => {

    useEffect(()=>{
        console.log('chart comp', data);
    },[data])

    const COLORS = ["#FD8A69", "#92E6AD", "#5BBFE8", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

  return (
    <div>
      <div>
        <PieChart width={500 } height={400} id='chart-wrapper'>
        <Pie
        id='chart'
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderCustomizedLabel}
        nameKey="nutriName"
      >

        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <LabelList dataKey="Nutriname" position="inside"/>
        </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default Chart
