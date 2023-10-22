export interface WeatherData {
  data: {
    valid_date: string;
    city_name: string;
    ob_time: string;
    weather: {
      icon: string;
      description: string;
    };
    max_temp: number;
    min_temp: number;
    rh: number;
    wind_spd: number;
    temp: number;
  }[];
}

export interface DailyForecastData {
  data: {
    valid_date: string;
    weather: {
      icon: string;
      description: string;
    };
    max_temp: number;
    min_temp: number;
  }[];
}

export interface WeatherDisplayProps {
  data: WeatherData; // Pass the data as a prop to the component
}

export interface DailyForecastProps {
  data: DailyForecastData;
}
