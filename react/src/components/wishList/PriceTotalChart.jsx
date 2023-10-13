import React, { useCallback, useEffect, useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const PriceTotalChart = ({chartData}) => {

  console.log('chartData4', chartData);
  
  // const [chartData, setChartData] = useState()
  
  // useEffect(()=>{
  //   console.log('chart 콤포넌트 data', data);
  //   setChartData(data)
  // },[data])
  
  // 차트용 데이터
  // const data = [

  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  // ];

  const renderActiveShape = (props) => {
    
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333" fontSize="15px">
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#8884d8" fill="none" />
        <circle cx={ex} cy={ey} r={2} fill="#8884d8" stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">가격 {value}</text>
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [ activeIndex ,setActiveIndex ] = useState(0)

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div >
        <PieChart width={500} height={450} className='chart-align'>
          <Pie 
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx={250}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            // onMouseEnter={this.onPieEnter}
            onMouseEnter={onPieEnter}
            // type='monotone' 
            fillOpacity={0.6}
          />
        </PieChart>
    </div>
  )
}

export default PriceTotalChart