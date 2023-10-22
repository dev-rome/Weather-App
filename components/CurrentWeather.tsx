import Image from "next/image";

import { WeatherDisplayProps } from "@/types";
import { getDayOfTheWeek } from "@/utils/dateUtils";

const CurrentWeather = ({ data }: WeatherDisplayProps) => {
  return (
    <div className="md:flex md:justify-between items-center mt-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">{data?.data[0].city_name}</h1>
        <p className="text-[#adb5bd]">
          {" "}
          {data?.data[0].ob_time && getDayOfTheWeek(data.data[0].ob_time)},{" "}
          {data?.data[0].weather.description}
        </p>
        <p className="text-[#adb5bd]">
          Humidity: {data?.data[0].rh}%, Wind:{" "}
          {data?.data[0].wind_spd.toFixed(1)}km/h
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 mt-10 md:mt-0">
        <Image
          src={`/icons/${data?.data[0].weather.icon}.png`}
          alt="weather icon"
          width={65}
          height={65}
        />
        <div className="flex items-center">
          <p className="text-6xl font-bold">{data?.data[0].temp.toFixed()}</p>
          <span className="self-start font-bold text-xl">°C</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
