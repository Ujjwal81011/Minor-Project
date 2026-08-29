import { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "5ecd70d2b9124b5e986181845243105";

  // =========================================================
  // GET WEATHER
  // =========================================================

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

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    getWeather(city.trim());
    setCity("");
  };

  // =========================================================
  // CURRENT LOCATION
  // =========================================================

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(`${latitude},${longitude}`);
        },
        () => {}
      );
    }
  }, []);

  return (
    <main
      className="
        min-h-screen
        w-full
        relative
        overflow-hidden

        flex
        items-center
        justify-center

        px-2
        sm:px-4
        lg:px-8

        py-3
        sm:py-5
        lg:py-8

        bg-[#080512]
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Pink */}
        <div
          className="
            absolute
            -top-32
            -left-32
            w-[300px]
            h-[300px]
            sm:w-[450px]
            sm:h-[450px]
            lg:w-[550px]
            lg:h-[550px]
            rounded-full
            bg-pink-500/30
            blur-[90px]
            sm:blur-[120px]
          "
        />

        {/* Cyan */}
        <div
          className="
            absolute
            -top-20
            -right-32
            w-[320px]
            h-[320px]
            sm:w-[480px]
            sm:h-[480px]
            lg:w-[580px]
            lg:h-[580px]
            rounded-full
            bg-cyan-400/25
            blur-[90px]
            sm:blur-[125px]
          "
        />

        {/* Purple */}
        <div
          className="
            absolute
            -bottom-40
            left-[10%]
            w-[350px]
            h-[350px]
            sm:w-[500px]
            sm:h-[500px]
            lg:w-[650px]
            lg:h-[650px]
            rounded-full
            bg-purple-600/30
            blur-[100px]
            sm:blur-[140px]
          "
        />

        {/* Orange */}
        <div
          className="
            absolute
            -bottom-32
            -right-24
            w-[300px]
            h-[300px]
            sm:w-[450px]
            sm:h-[450px]
            rounded-full
            bg-orange-400/20
            blur-[90px]
            sm:blur-[120px]
          "
        />

        {/* Green */}
        <div
          className="
            absolute
            top-[42%]
            left-[45%]
            w-[220px]
            h-[220px]
            sm:w-[320px]
            sm:h-[320px]
            rounded-full
            bg-emerald-400/15
            blur-[90px]
          "
        />

        {/* Rainbow Arc */}

        <div
          className="
            absolute
            top-[2%]
            left-1/2
            -translate-x-1/2

            w-[420px]
            h-[150px]

            sm:w-[700px]
            sm:h-[240px]

            lg:w-[950px]
            lg:h-[320px]

            rounded-[50%]

            border-[8px]
            sm:border-[14px]
            lg:border-[18px]

            border-pink-400/15

            blur-[2px]
          "
        />

        <div
          className="
            absolute
            top-[4%]
            left-1/2
            -translate-x-1/2

            w-[370px]
            h-[130px]

            sm:w-[620px]
            sm:h-[210px]

            lg:w-[850px]
            lg:h-[290px]

            rounded-[50%]

            border-[7px]
            sm:border-[12px]
            lg:border-[15px]

            border-yellow-300/15

            blur-[2px]
          "
        />

        <div
          className="
            absolute
            top-[6%]
            left-1/2
            -translate-x-1/2

            w-[320px]
            h-[110px]

            sm:w-[540px]
            sm:h-[180px]

            lg:w-[750px]
            lg:h-[250px]

            rounded-[50%]

            border-[6px]
            sm:border-[10px]
            lg:border-[13px]

            border-cyan-300/15

            blur-[2px]
          "
        />

      </div>


      {/* =====================================================
          MAIN CARD
      ===================================================== */}

      <section
        className="
          relative
          z-10

          w-full
          max-w-[1050px]

          overflow-hidden

          rounded-[24px]
          sm:rounded-[30px]
          lg:rounded-[34px]

          border
          border-white/15

          bg-white/[0.06]

          backdrop-blur-3xl

          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          sm:shadow-[0_35px_100px_rgba(0,0,0,0.5)]

          text-white
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-28
            sm:w-48
            lg:w-64

            h-[3px]

            rounded-full

            bg-gradient-to-r
            from-cyan-400
            via-fuchsia-500
            to-yellow-300

            shadow-[0_0_25px_rgba(34,211,238,0.7)]
          "
        />


        {/* =====================================================
            HEADER
        ===================================================== */}

        <header
          className="
            relative

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-3
            sm:gap-4

            px-3
            sm:px-5
            lg:px-7

            py-3
            sm:py-4
            lg:py-5

            border-b
            border-white/10
          "
        >

          {/* BRAND */}

          <div className="flex items-center gap-2.5">

            <div
              className="
                relative

                w-10
                h-10
                sm:w-11
                sm:h-11
                lg:w-12
                lg:h-12

                rounded-xl
                sm:rounded-2xl

                flex
                items-center
                justify-center

                bg-gradient-to-br
                from-pink-500
                via-purple-500
                to-cyan-400

                shadow-[0_0_30px_rgba(168,85,247,0.4)]
              "
            >
              <span className="text-xl sm:text-2xl">
                🌈
              </span>
            </div>

            <div>

              <h1
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl

                  font-black

                  tracking-tight
                "
              >
                Sky
                <span
                  className="
                    text-cyan-300
                    drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]
                  "
                >
                  Vibe
                </span>
              </h1>

              <p
                className="
                  text-[7px]
                  sm:text-[8px]
                  lg:text-[9px]

                  tracking-[2px]

                  text-white/35
                "
              >
                YOUR PERSONAL WEATHER
              </p>

            </div>

          </div>


          {/* SEARCH */}

          <form
            onSubmit={handleSubmit}
            className="
              w-full
              sm:w-[300px]
              lg:w-[360px]

              flex
              items-center

              p-1.5

              rounded-2xl

              bg-black/20

              border
              border-white/10

              shadow-inner

              focus-within:border-cyan-400/60

              transition-all
            "
          >

            <span
              className="
                pl-2
                text-sm
                sm:text-base
                opacity-50
              "
            >
              🔍
            </span>

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search city..."
              className="
                flex-1
                min-w-0

                bg-transparent

                outline-none

                text-white

                placeholder-white/30

                px-2

                py-2

                text-xs
                sm:text-sm
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                shrink-0

                px-4
                sm:px-5

                py-2

                rounded-xl

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                text-[#06111d]

                font-black

                text-[9px]
                sm:text-[10px]

                shadow-[0_5px_20px_rgba(34,211,238,0.25)]

                hover:scale-[1.02]

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
              gap-2

              px-4
              py-2

              rounded-full

              bg-emerald-400/10

              border
              border-emerald-400/20

              text-[10px]

              font-bold

              text-emerald-300
            "
          >
            <span className="animate-pulse">
              ●
            </span>

            LIVE
          </div>

        </header>


        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && (
          <div className="py-16 text-center">

            <div
              className="
                mx-auto

                w-10
                h-10

                rounded-full

                border-4
                border-white/10
                border-t-cyan-300

                animate-spin

                shadow-[0_0_20px_rgba(34,211,238,0.3)]
              "
            />

            <p className="mt-4 text-xs text-white/50">
              Finding your weather...
            </p>

          </div>
        )}


        {/* =====================================================
            ERROR
        ===================================================== */}

        {!loading && error && (
          <div className="py-14 text-center px-4">

            <div className="text-5xl mb-4">
              🌧️
            </div>

            <p className="text-sm text-white/60">
              {error}
            </p>

          </div>
        )}


        {/* =====================================================
            WEATHER
        ===================================================== */}

        {!loading && data?.current && (
          <div
            className="
              p-2.5
              sm:p-4
              lg:p-6
            "
          >

            {/* =================================================
                MAIN WEATHER GRID
            ================================================= */}

            <div
              className="
                grid

                grid-cols-2

                lg:grid-cols-12

                gap-2
                sm:gap-3
                lg:gap-4
              "
            >

              {/* =================================================
                  LOCATION
              ================================================= */}

              <div
                className="
                  col-span-2
                  lg:col-span-4

                  relative
                  overflow-hidden

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white/[0.055]

                  border
                  border-white/10

                  p-3
                  sm:p-4
                  lg:p-5

                  flex
                  flex-col
                  items-center
                  justify-center

                  text-center

                  group

                  transition-all

                  hover:border-cyan-400/30
                "
              >

                {/* Background Glow */}

                <div
                  className="
                    absolute

                    -top-12
                    -right-12

                    w-32
                    h-32

                    rounded-full

                    bg-cyan-400/10

                    blur-[50px]
                  "
                />

                <p
                  className="
                    relative

                    text-[7px]
                    sm:text-[8px]

                    uppercase

                    tracking-[2px]
                    sm:tracking-[3px]

                    text-cyan-300/60
                  "
                >
                  CURRENT LOCATION
                </p>

                <h2
                  className="
                    relative

                    mt-1

                    text-xl
                    sm:text-2xl
                    lg:text-3xl

                    font-black

                    truncate

                    max-w-full
                  "
                >
                  {data.location.name}
                </h2>

                <p
                  className="
                    relative

                    text-[9px]
                    sm:text-[10px]
                    lg:text-xs

                    text-white/40

                    truncate

                    max-w-full
                  "
                >
                  {data.location.region
                    ? `${data.location.region}, `
                    : ""}
                  {data.location.country}
                </p>

                {/* Weather Icon */}

                <div
                  className="
                    relative

                    mt-2
                    sm:mt-3

                    w-16
                    h-16

                    sm:w-20
                    sm:h-20

                    lg:w-24
                    lg:h-24

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

                    shadow-[0_0_35px_rgba(34,211,238,0.15)]

                    group-hover:scale-105

                    transition-transform
                  "
                >

                  <img
                    src={`https:${data.current.condition.icon}`}
                    alt={data.current.condition.text}
                    className="
                      w-12
                      h-12

                      sm:w-16
                      sm:h-16

                      lg:w-20
                      lg:h-20
                    "
                  />

                </div>

                <p
                  className="
                    relative

                    mt-1.5

                    text-[10px]
                    sm:text-xs
                    lg:text-sm

                    font-bold
                  "
                >
                  {data.current.condition.text}
                </p>

              </div>


              {/* =================================================
                  TEMPERATURE
              ================================================= */}

              <div
                className="
                  col-span-1
                  lg:col-span-4

                  relative
                  overflow-hidden

                  rounded-2xl
                  sm:rounded-3xl

                  bg-gradient-to-br
                  from-cyan-400/[0.14]
                  via-purple-400/[0.10]
                  to-fuchsia-400/[0.12]

                  border
                  border-white/10

                  p-3
                  sm:p-4
                  lg:p-5

                  flex
                  flex-col
                  items-center
                  justify-center

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

                    bg-fuchsia-500/20

                    blur-[55px]
                  "
                />

                <p
                  className="
                    relative

                    text-[7px]
                    sm:text-[8px]

                    uppercase

                    tracking-[2px]
                    sm:tracking-[3px]

                    text-white/40
                  "
                >
                  TEMPERATURE
                </p>

                <div
                  className="
                    relative

                    flex
                    items-start

                    mt-1
                  "
                >

                  <span
                    className="
                      text-[46px]
                      sm:text-[58px]
                      lg:text-[76px]

                      leading-none

                      font-black

                      tracking-[-3px]
                      lg:tracking-[-5px]

                      bg-gradient-to-b
                      from-white
                      via-white
                      to-cyan-200

                      bg-clip-text

                      text-transparent

                      drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]
                    "
                  >
                    {Math.round(data.current.temp_c)}
                  </span>

                  <span
                    className="
                      text-lg
                      sm:text-xl
                      lg:text-2xl

                      font-black

                      text-cyan-300

                      mt-1
                    "
                  >
                    °C
                  </span>

                </div>

                <p
                  className="
                    relative

                    text-[8px]
                    sm:text-[10px]

                    text-white/40
                  "
                >
                  FEELS LIKE{" "}
                  <span className="text-white font-bold">
                    {Math.round(data.current.feelslike_c)}°C
                  </span>
                </p>

              </div>


              {/* =================================================
                  STATS
              ================================================= */}

              <div
                className="
                  col-span-1
                  lg:col-span-4

                  grid
                  grid-cols-2

                  gap-2
                  sm:gap-3
                "
              >

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


            {/* =================================================
                BOTTOM INFO
            ================================================= */}

            <div
              className="
                mt-2
                sm:mt-3

                grid
                grid-cols-3

                rounded-xl
                sm:rounded-2xl

                overflow-hidden

                bg-black/15

                border
                border-white/10
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


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {!loading && !data && !error && (
          <div
            className="
              py-10
              sm:py-14
              lg:py-16

              px-4

              text-center
            "
          >

            <div
              className="
                w-16
                h-16
                sm:w-20
                sm:h-20

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

                shadow-[0_0_40px_rgba(168,85,247,0.2)]
              "
            >
              <span className="text-3xl sm:text-4xl">
                🌍
              </span>
            </div>

            <h2
              className="
                mt-4

                text-base
                sm:text-lg
                lg:text-xl

                font-black
              "
            >
              Search for a city
            </h2>

            <p className="mt-1 text-[9px] sm:text-xs text-white/35">
              Discover the current weather anywhere
            </p>

          </div>
        )}


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer
          className="
            border-t
            border-white/10

            bg-black/10

            text-center

            px-3
            sm:px-5

            py-2
            sm:py-3
          "
        >

          <p
            className="
              text-[7px]
              sm:text-[8px]
              lg:text-[9px]

              text-white/30

              tracking-wide
            "
          >
            Crafted with ✦ by
          </p>

          <p
            className="
              mt-0.5

              text-base
              sm:text-lg
              lg:text-xl

              font-black

              tracking-wide

              bg-gradient-to-r
              from-cyan-300
              via-fuchsia-400
              to-yellow-300

              bg-clip-text

              text-transparent

              drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]
            "
          >
            Ujjwal Mishra
          </p>

        </footer>

      </section>

    </main>
  );
}


/* ============================================================
   WEATHER STAT COMPONENT
============================================================ */

function WeatherStat({
  icon,
  title,
  value,
  color,
}) {
  const colors = {
    cyan:
      "bg-cyan-400/10 border-cyan-400/15 shadow-[inset_0_0_20px_rgba(34,211,238,0.03)]",

    blue:
      "bg-blue-400/10 border-blue-400/15 shadow-[inset_0_0_20px_rgba(59,130,246,0.03)]",

    purple:
      "bg-purple-400/10 border-purple-400/15 shadow-[inset_0_0_20px_rgba(168,85,247,0.03)]",

    yellow:
      "bg-yellow-400/10 border-yellow-400/15 shadow-[inset_0_0_20px_rgba(250,204,21,0.03)]",
  };

  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-xl
        sm:rounded-2xl

        bg-white/[0.055]

        backdrop-blur-xl

        border
        border-white/10

        px-2
        xs:px-2.5
        sm:px-3

        py-2
        sm:py-3

        flex
        items-center

        gap-1.5
        sm:gap-2.5

        min-w-0

        transition-all

        hover:-translate-y-0.5
        hover:bg-white/[0.08]
      "
    >

      {/* Icon */}

      <div
        className={`
          shrink-0

          w-7
          h-7

          sm:w-9
          sm:h-9

          rounded-lg
          sm:rounded-xl

          ${colors[color]}

          border

          flex
          items-center
          justify-center

          text-xs
          sm:text-sm
        `}
      >
        {icon}
      </div>


      {/* Text */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-[6px]
            sm:text-[7px]
            lg:text-[8px]

            uppercase

            tracking-[1px]

            text-white/30

            truncate
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5

            text-[9px]
            sm:text-[11px]
            lg:text-xs

            font-black

            truncate
          "
        >
          {value}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   INFO COMPONENT
============================================================ */

function Info({ title, value }) {
  return (
    <div
      className="
        min-w-0

        py-1.5
        sm:py-2.5
        lg:py-3

        text-center

        border-r
        last:border-r-0

        border-white/10
      "
    >

      <p
        className="
          text-[5px]
          sm:text-[7px]
          lg:text-[8px]

          tracking-[1px]
          sm:tracking-[2px]

          text-white/30

          truncate
        "
      >
        {title}
      </p>

      <p
        className="
          mt-0.5

          text-[8px]
          sm:text-[10px]
          lg:text-xs

          font-bold

          truncate

          px-1
        "
      >
        {value}
      </p>

    </div>
  );
}