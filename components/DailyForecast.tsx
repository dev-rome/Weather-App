import Image from "next/image";

import { DailyForecastProps, DailyForecastItemProps } from "@/types";
import { getDayOfTheWeek } from "@/utils/dateUtils";

const DailyForecastItem = ({
  date,
  maxTemp,
  minTemp,
  icon,
}: DailyForecastItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-[#adb5bd]">{getDayOfTheWeek(date).slice(0, 3)}</p>
      <Image
        src={`/icons/${icon}.png`}
        alt="weather icon"
        width={35}
        height={35}
      />
      <div className="flex gap-3">
        <p>{minTemp.toFixed()}°</p>
        <p>{maxTemp.toFixed()}°</p>
      </div>
    </div>
  );
};

const DailyForecast = ({ data }: DailyForecastProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9">
      {data.data.map((item, index) => (
        <DailyForecastItem
          key={index}
          date={item.valid_date}
          icon={item.weather.icon}
          minTemp={item.min_temp}
          maxTemp={item.max_temp}
        />
      ))}
    </div>
  );
};

export default DailyForecast;
