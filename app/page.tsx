"use client";

import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { WeatherData, DailyForecastData } from "@/types";

import SearchForm from "@/components/SearchForm";
import CurrentWeather from "@/components/CurrentWeather";
import DailyForecast from "@/components/DailyForecast";

export default function Home() {
  const [currentData, setCurrentData] = useState<WeatherData | null>(null);
  const [dailyData, setDailyData] = useState<DailyForecastData | null>(null);

  const handleSubmit = async (city: string) => {
    const weatherKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const currentUrl = `http://api.weatherbit.io/v2.0/current?key=${weatherKey}&city=${city}`;
    const dailyUrl = `http://api.weatherbit.io/v2.0/forecast/daily?key=${weatherKey}&city=${city}`;
    try {
      const currentRes = await fetch(currentUrl);
      const currentResults: WeatherData = await currentRes.json();
      setCurrentData(currentResults);

      const dailyRes = await fetch(dailyUrl);
      const dailyResults: DailyForecastData = await dailyRes.json();
      setDailyData(dailyResults);
    } catch (error) {
      throw new Error("Failed to fetch data.");
    }
  };

  return (
    <section className="bg-[#edf2ff] h-screen flex justify-center px-4 py-12">
      <div className="bg-[#fff] max-w-3xl mx-auto w-full rounded-md p-10">
        <div className="flex gap-2 items-center">
          <TiWeatherCloudy className="text-3xl" />
          <p className="text-xl font-bold">Weather App</p>
        </div>
        <SearchForm onSubmit={handleSubmit} />
        {currentData && dailyData ? (
          <>
            <CurrentWeather data={currentData} />
            <DailyForecast data={dailyData} />
          </>
        ) : (
          <div className="text-center mt-20">
            <p>
              Enter a city and click the search button to see its current
              weather.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
