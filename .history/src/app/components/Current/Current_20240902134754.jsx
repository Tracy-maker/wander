import React, { useState, useEffect } from "react";
import Temperature from "../Temperature/Temperature";
import SubText from "./components/SubText/SubText";
import Metas from "./components/Metas/Metas";

const Current = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log("Current weather data:", data);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex py-6 px-8 bg-cover bg-center bg-no-repeat justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row py-6 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-lg">
      <div className="flex flex-col md:w-2/3 justify-center space-y-4">
        {/* 温度显示 */}
        <div className="text-8xl font-bold">
          <Temperature>{Math.round(data.main.temp)}</Temperature>C
        </div>
        {/* 天气状态 */}
        <div className="flex items-center space-x-2 text-2xl">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].main}
            className="w-12 h-12"
          />
          <SubText>{data.weather[0].main}</SubText>
        </div>
        {/* 其他元数据 */}
        <Metas data={data} />
      </div>
      {/* 城市名称 */}
      <div className="md:w-1/3 flex items-center justify-end text-4xl font-semibold text-right mt-6 md:mt-0">
        {data.city}
      </div>
    </div>
  );
};

export default Current;
