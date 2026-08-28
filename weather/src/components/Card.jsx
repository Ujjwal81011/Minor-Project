import { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "5ecd70d2b9124b5e986181845243105";

  // GET WEATHER DATA
  const getWeather = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`
      );

      setData(response.data);
    } catch (err) {
      setData(null);
      setError("Couldn't find that city. Try another location.");
    } finally {
      setLoading(false);
    }
  };

  // SEARCH CITY
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    getWeather(city.trim());
    setCity("");
  };

  // CURRENT LOCATION
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(`${latitude},${longitude}`);
        },
        () => {
          // User can search manually
        }
      );
    }
  }, []);

  return (
    <div
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4
        py-5
        relative
        overflow-hidden
        bg-[#100820]
      "
    >
      {/* ================= RAINBOW BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pink Glow */}
        <div
          className="
            absolute
            -top-44
            -left-40
            w-[470px]
            h-[470px]
            rounded-full
            bg-pink-500/60
            blur-[115px]
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            -top-24
            -right-36
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-400/50
            blur-[120px]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            -bottom-56
            left-[10%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-purple-600/60
            blur-[130px]
          "
        />

        {/* Orange Glow */}
        <div
          className="
            absolute
            -bottom-48
            -right-32
            w-[450px]
            h-[450px]
            rounded-full
            bg-orange-400/50
            blur-[115px]
          "
        />

        {/* Green Glow */}
        <div
          className="
            absolute
            top-[35%]
            left-[42%]
            w-[300px]
            h-[300px]
            rounded-full
            bg-green-400/30
            blur-[105px]
          "
        />

        {/* Rainbow Arc */}
        <div
          className="
            absolute
            top-[3%]
            left-1/2
            -translate-x-1/2
            w-[780px]
            h-[270px]
            rounded-[50%]
            border-[18px]
            border-pink-400/20
            blur-[3px]
          "
        />

        <div
          className="
            absolute
            top-[5%]
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[240px]
            rounded-[50%]
            border-[15px]
            border-yellow-300/20
            blur-[3px]
          "
        />

        <div
          className="
            absolute
            top-[7%]
            left-1/2
            -translate-x-1/2
            w-[620px]
            h-[210px]
            rounded-[50%]
            border-[13px]
            border-cyan-300/20
            blur-[3px]
          "
        />

        {/* Extra Center Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[400px]
            h-[250px]
            rounded-full
            bg-fuchsia-500/10
            blur-[100px]
          "
        />
      </div>

      {/* ================= MAIN GLASS CARD ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          rounded-[26px]
          bg-white/[0.055]
          backdrop-blur-3xl
          border
          border-white/15
          shadow-[0_30px_90px_rgba(0,0,0,0.35)]
          text-white
          overflow-hidden
        "
      >
        {/* TOP RAINBOW LINE */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-52
            h-[3px]
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-fuchsia-500
            to-yellow-300
            shadow-[0_0_20px_rgba(34,211,238,0.5)]
          "
        />

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            px-5
            py-4
            border-b
            border-white/10
          "
        >
          {/* BRAND */}

          <div className="flex items-center gap-3">
            <div
              className="
                w-10
                h-10
                rounded-2xl
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-pink-500
                via-purple-500
                to-cyan-400
                shadow-[0_0_25px_rgba(168,85,247,0.35)]
              "
            >
              <span className="text-xl">🌈</span>
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Sky
                <span className="text-cyan-300">Vibe</span>
              </h1>

              <p className="text-[9px] text-white/35 tracking-wide">
                YOUR PERSONAL WEATHER
              </p>
            </div>
          </div>

          {/* SEARCH */}

          <form
            onSubmit={handleSubmit}
            className="
              w-full
              md:w-[310px]
              flex
              items-center
              gap-1.5
              p-1
              rounded-2xl
              bg-white/[0.07]
              border
              border-white/10
              shadow-inner
              focus-within:border-cyan-400/60
              focus-within:shadow-[0_0_20px_rgba(34,211,238,0.12)]
              transition-all
            "
          >
            <span className="pl-2 text-white/40 text-sm">🔍</span>

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search city..."
              className="
                flex-1
                min-w-0
                bg-transparent
                text-white
                placeholder-white/30
                px-1
                py-2.5
                outline-none
                text-xs
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                shrink-0
                px-4
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                hover:from-cyan-300
                hover:to-blue-400
                text-[#06111d]
                font-extrabold
                text-[10px]
                shadow-[0_4px_15px_rgba(34,211,238,0.25)]
                active:scale-95
                transition-all
                disabled:opacity-50
              "
            >
              {loading ? "..." : "SEARCH"}
            </button>
          </form>

          {/* LIVE */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-1.5
              px-3
              py-1.5
              rounded-full
              bg-emerald-400/10
              border
              border-emerald-400/20
              text-[9px]
              text-emerald-300
              font-bold
            "
          >
            <span className="animate-pulse">●</span>
            LIVE
          </div>
        </div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="py-12 text-center">
            <div
              className="
                w-9
                h-9
                mx-auto
                rounded-full
                border-4
                border-white/10
                border-t-cyan-300
                animate-spin
              "
            />

            <p className="text-xs text-white/50 mt-4">
              Finding your weather...
            </p>
          </div>
        )}

        {/* ================= ERROR ================= */}

        {!loading && error && (
          <div className="py-12 text-center">
            <div className="text-4xl mb-3">🌧️</div>

            <p className="text-sm text-white/60">{error}</p>
          </div>
        )}

        {/* ================= WEATHER CONTENT ================= */}

        {!loading && data?.current && (
          <div className="px-5 py-4">
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[1fr_1fr_1.25fr]
                gap-3
              "
            >
              {/* LOCATION */}

              <div
                className="
                  group
                  rounded-2xl
                  bg-white/[0.055]
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-4
                  py-4
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  hover:border-cyan-400/30
                  hover:bg-white/[0.08]
                  transition-all
                "
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-cyan-300/60
                  "
                >
                  CURRENT LOCATION
                </p>

                <h2 className="text-xl font-extrabold mt-1.5">
                  {data.location.name}
                </h2>

                <p className="text-[10px] text-white/40">
                  {data.location.region
                    ? `${data.location.region}, `
                    : ""}
                  {data.location.country}
                </p>

                <div
                  className="
                    mt-3
                    w-[68px]
                    h-[68px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-cyan-400/20
                    via-purple-400/10
                    to-pink-400/10
                    border
                    border-white/10
                    shadow-[0_0_30px_rgba(34,211,238,0.12)]
                    group-hover:scale-105
                    transition-transform
                  "
                >
                  <img
                    src={`https:${data.current.condition.icon}`}
                    alt={data.current.condition.text}
                    className="w-14 h-14"
                  />
                </div>

                <p className="text-xs font-semibold mt-2">
                  {data.current.condition.text}
                </p>
              </div>

              {/* TEMPERATURE */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400/15
                  via-purple-400/10
                  to-fuchsia-400/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-4
                  py-4
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    w-36
                    h-36
                    rounded-full
                    bg-cyan-400/20
                    blur-[55px]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-16
                    -left-16
                    w-36
                    h-36
                    rounded-full
                    bg-fuchsia-500/15
                    blur-[55px]
                  "
                />

                <p
                  className="
                    relative
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-white/40
                  "
                >
                  TEMPERATURE
                </p>

                <div className="relative flex items-start mt-1">
                  <span
                    className="
                      text-[58px]
                      leading-none
                      font-black
                      tracking-[-4px]
                      bg-gradient-to-b
                      from-white
                      to-cyan-200
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {Math.round(data.current.temp_c)}
                  </span>

                  <span className="text-xl font-bold text-cyan-300 mt-1">
                    °C
                  </span>
                </div>

                <p className="relative text-[10px] text-white/45 mt-1">
                  FEELS LIKE{" "}
                  <span className="text-white font-bold">
                    {Math.round(data.current.feelslike_c)}°C
                  </span>
                </p>
              </div>

              {/* WEATHER STATS */}

              <div className="grid grid-cols-2 gap-2">
                <WeatherStat
                  icon="💧"
                  title="Humidity"
                  value={`${data.current.humidity}%`}
                  color="cyan"
                />

                <WeatherStat
                  icon="💨"
                  title="Wind"
                  value={`${data.current.wind_kph} km/h`}
                  color="blue"
                />

                <WeatherStat
                  icon="👁️"
                  title="Visibility"
                  value={`${data.current.vis_km} km`}
                  color="purple"
                />

                <WeatherStat
                  icon="☀️"
                  title="UV Index"
                  value={data.current.uv}
                  color="yellow"
                />
              </div>
            </div>

            {/* EXTRA WEATHER INFO */}

            <div
              className="
                mt-3
                grid
                grid-cols-3
                rounded-xl
                bg-white/[0.035]
                backdrop-blur-xl
                border
                border-white/10
                overflow-hidden
              "
            >
              <Info
                title="PRESSURE"
                value={`${data.current.pressure_mb} mb`}
              />

              <Info
                title="CLOUD"
                value={`${data.current.cloud}%`}
              />

              <Info
                title="UPDATED"
                value={data.current.last_updated.split(" ")[1]}
              />
            </div>
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}

        {!loading && !data && !error && (
          <div className="py-10 text-center">
            <div
              className="
                w-16
                h-16
                mx-auto
                rounded-full
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-cyan-400/20
                via-purple-400/20
                to-pink-400/20
                border
                border-white/10
                shadow-[0_0_30px_rgba(168,85,247,0.15)]
              "
            >
              <span className="text-3xl">🌍</span>
            </div>

            <h2 className="font-bold mt-3">
              Search for a city
            </h2>

            <p className="text-[10px] text-white/35 mt-1">
              Discover the current weather anywhere
            </p>
          </div>
        )}

        {/* ================= FOOTER ================= */}

        <div
          className="
            px-5
            py-3
            border-t
            border-white/10
            text-center
            bg-black/10
          "
        >
          <p className="text-[9px] text-white/35 tracking-wide">
            Crafted with ✦ by
          </p>

          <p
            className="
              mt-0.5
              text-lg
              font-black
              tracking-wide
              bg-gradient-to-r
              from-cyan-300
              via-fuchsia-400
              to-yellow-300
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]
            "
          >
            Ujjwal Mishra
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= WEATHER STAT ================= */

function WeatherStat({
  icon,
  title,
  value,
  color,
}) {
  const colors = {
    cyan: "bg-cyan-400/10 border-cyan-400/10",
    blue: "bg-blue-400/10 border-blue-400/10",
    purple: "bg-purple-400/10 border-purple-400/10",
    yellow: "bg-yellow-400/10 border-yellow-400/10",
  };

  return (
    <div
      className="
        rounded-xl
        bg-white/[0.055]
        backdrop-blur-xl
        border
        border-white/10
        px-2.5
        py-2
        flex
        items-center
        gap-2
        hover:bg-white/[0.09]
        hover:-translate-y-[1px]
        transition-all
      "
    >
      <div
        className={`
          w-8
          h-8
          shrink-0
          rounded-lg
          ${colors[color]}
          flex
          items-center
          justify-center
          text-sm
        `}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[7px] uppercase tracking-wider text-white/30">
          {title}
        </p>

        <p className="text-[11px] font-bold mt-0.5 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ================= BOTTOM INFO ================= */

function Info({ title, value }) {
  return (
    <div
      className="
        py-2
        text-center
        border-r
        last:border-r-0
        border-white/10
      "
    >
      <p className="text-[7px] tracking-[2px] text-white/30">
        {title}
      </p>

      <p className="text-[10px] font-semibold mt-0.5">
        {value}
      </p>
    </div>
  );
}