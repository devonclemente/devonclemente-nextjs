import type { Metadata } from "next";
import WeatherApiProjectClient from "./WeatherApiProjectClient";

export const metadata: Metadata = {
  title: "Weather API Automation Project | Devon Clemente",
  description: "Automated weather-based email notifications using Zapier, OpenWeatherMap API, and Gmail. Built by Devon Clemente, AI Process Automation Specialist.",
  openGraph: {
    title: "Weather API Automation Project | Devon Clemente",
    description: "Automated weather-based email notifications using Zapier, OpenWeatherMap API, and Gmail.",
    url: "https://devonclemente.com/weather-api-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/weather-api-project" },
};

export default function WeatherApiProjectPage() {
  return <WeatherApiProjectClient />;
}
