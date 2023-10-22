"use client";

import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { WeatherData } from "@/types";

import SearchForm from "@/components/SearchForm";
import CurrentWeather from "@/components/CurrentWeather";

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  const handleSubmit = async (city: string) => {
    const weatherKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const url = `http://api.weatherbit.io/v2.0/current?key=${weatherKey}&city=${city}`;
    try {
      const res = await fetch(url);
      const results: WeatherData = await res.json();
      setData(results);
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
        {data ? (
          <CurrentWeather data={data} />
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
