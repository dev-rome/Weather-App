export interface WeatherData {
  data: {
    city_name: string;
    ob_time: string;
    weather: {
      icon: string;
      description: string;
    };
    rh: number;
    wind_spd: number;
    temp: number;
  }[];
}

export interface WeatherDisplayProps {
  data: WeatherData; // Pass the data as a prop to the component
}
