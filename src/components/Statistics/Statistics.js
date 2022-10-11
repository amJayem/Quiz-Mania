import React from "react";
import { useLoaderData } from "react-router-dom";
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip} from "recharts";

const Statistics = () => {
  const dataArray = useLoaderData().data;
  console.log(dataArray);
  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={dataArray}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="total" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div className="l-56">
        <h1 className="mb-24 font-bold text-3xl">Statistics representation based on API data</h1>
        {renderLineChart}
    </div>
  );
};

export default Statistics;
