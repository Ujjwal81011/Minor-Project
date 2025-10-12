import { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5ecd70d2b9124b5e986181845243105&q=${city}&aqi=yes`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    setCity("");
  }

  function getLocationData(lat, lon) {
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5ecd70d2b9124b5e986181845243105&q=${lat},${lon}&aqi=yes`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        getLocationData(pos.coords.latitude, pos.coords.longitude);
      });
    }
  }, []);

  return (
    <div className="rounded-2xl flex justify-center items-center bg-gradient-to-br from-blue-200 via-sky-100 to-pink-300 p-4">

      <div className="rounded-2xl p-8 sm:p-10 w-full max-w-md flex flex-col items-center gap-6 transition-all hover:scale-[1.02]">
        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full justify-center gap-3"
        >
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="flex-1 px-4 py-2 text-gray-800 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/80"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-md"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-lg font-medium text-gray-800 animate-pulse">
            Fetching weather data...
          </p>
        )}

        {/* Weather Data */}
        {!loading && data && data.current ? (
          <div className="text-center text-gray-800 flex flex-col items-center">
            <img
              src={data.current.condition.icon}
              alt="Weather Icon"
              className="w-24 h-24 mb-2"
            />
            <h2 className="text-2xl font-semibold">
              {data.location.name}, {data.location.region}
            </h2>
            <p className="text-gray-600 mb-3">{data.location.country}</p>

            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700 bg-white/20 p-4 rounded-xl">
              <p>
                🌡️ Temp:{" "}
                <span className="font-semibold">
                  {data.current.temp_c}°C
                </span>
              </p>
              <p>
                🤗 Feels Like:{" "}
                <span className="font-semibold">
                  {data.current.feelslike_c}°C
                </span>
              </p>
              <p>
                💨 Wind:{" "}
                <span className="font-semibold">
                  {data.current.wind_kph} kph
                </span>
              </p>
              <p>
                💧 Humidity:{" "}
                <span className="font-semibold">
                  {data.current.humidity}%
                </span>
              </p>
            </div>

            <p className="mt-4 italic text-gray-700">
              {data.current.condition.text}
            </p>
          </div>
        ) : (
          !loading && (
            <p className="text-gray-800 text-center">
              Please allow location access or search for a city 🌍
            </p>
          )
        )}

        {/* Footer */}
        <p className="text-sm text-gray-700 mt-6">Made by Ujjwal Mishra 🌤️</p>
      </div>
    </div>
  );
}