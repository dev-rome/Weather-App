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

export interface DailyForecastItemProps {
  date: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
}

export interface SearchFormProps {
  onSubmit: (city: string) => void;
}

export interface WeatherDisplayProps {
  data: WeatherData;
}

export interface DailyForecastProps {
  data: DailyForecastData;
}
