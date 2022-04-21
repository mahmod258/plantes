import { useState } from "react";
export function Mainn({ index }) {
  const [data, setData] = useState([
    {
      planet: "MERCURY",
      color: "#419ebb",
      size: "200px",
      img: "https://d33wubrfki0l68.cloudfront.net/2412cfbc443beec064c6a662be23adfa4bb9cbb6/e883c/assets/planet-mercury.svg",
      pra: [
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      ],
      details: {
        rotation_time: "58.6 DAYS",
        revolution_time: "87.97 DAYS",
        radius: "2,439.7 KM",
        averageTemp: "430°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-mercury-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/8267d22ba6906c4073ca097b5a83432d7f2d4a1c/b2a86/assets/geology-mercury.png",
      ],
    },
    {
      planet: "VENUS",
      color: "#EDA249",
      size: "250px",
      img: "https://d33wubrfki0l68.cloudfront.net/c6426392c8f163ba829989f35da15c1f26caa4f1/6623f/assets/planet-venus.svg",
      pra: [
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      ],
      details: {
        rotation_time: "243 DAYS",
        revolution_time: "224.7 DAYS",
        radius: "6,051.8 KM",
        averageTemp: "471°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-venus-internal.svg",

        "https://d33wubrfki0l68.cloudfront.net/71e78e41faf904cc476314983f834f4e13470770/d1747/assets/geology-venus.png",
      ],
    },

    {
      planet: "EARTH",
      color: "#6D2ED5",
      size: "250px",
      img: "https://d33wubrfki0l68.cloudfront.net/b6722b005891bd6e4b8cd75f78c89ad3bec2c83c/acf32/assets/planet-earth.svg",
      pra: [
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      ],
      details: {
        rotation_time: "0.99 DAYS",
        revolution_time: "365.26 DAYS",
        radius: "6,371 KM",
        averageTemp: "16°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-earth-internal.svg",

        "https://d33wubrfki0l68.cloudfront.net/b1e74868252e72d11541d13bbd3d1e5b95c81529/6a8b8/assets/geology-earth.png",
      ],
    },
    {
      planet: "MARS",
      color: "#D14C32",
      size: "200px",
      img: "https://d33wubrfki0l68.cloudfront.net/8db673593e54a95988a6bd3ceb776839ae635f97/ba56f/assets/planet-mars.svg",
      pra: [
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      ],
      details: {
        rotation_time: "1.03 DAYS",
        revolution_time: "1.88 YEARS",
        radius: "3,389.5 KM",
        averageTemp: "-28°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-mars-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/0be29cefb99e7dbaf1faeba59a90a3ae4c2aa539/236b3/assets/geology-mars.png",
      ],
    },
    {
      planet: "JUPITER",
      color: "#D83A34",
      size: "400px",
      img: "https://d33wubrfki0l68.cloudfront.net/44f3e1018b6b22b205aaa78eb1c54169752be3e6/f65fd/assets/planet-jupiter.svg",
      pra: [
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      ],
      details: {
        rotation_time: "9.93 HOURS",
        revolution_time: "11.86 YEARS",
        radius: "69,911 KM",
        averageTemp: "-108°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-jupiter-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/dd2f38eef856cb377f754ceb8ecc90457bf7b6b1/fcc0c/assets/geology-jupiter.png",
      ],
    },
    {
      planet: "SATURN",
      color: "#CD5120",
      size: "450px",
      img: "https://d33wubrfki0l68.cloudfront.net/a2e62364d5f379ee3eb8ed5f8b2d3d039b1f7722/f416b/assets/planet-saturn.svg",
      pra: [
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass. ",
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      ],
      details: {
        rotation_time: "10.8 HOURS",
        revolution_time: "29.46 YEARS",
        radius: "58,232 KM",
        averageTemp: "-138°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-saturn-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/700ac6cb57bc452f11843912f4c52d7b90ceb713/90f95/assets/geology-saturn.png",
      ],
    },
    {
      planet: "URANUS",
      color: "#1EC1A2",
      size: "300px",
      img: "https://d33wubrfki0l68.cloudfront.net/a2b78e59941d4333116b6e3f8a04bed98a7ae620/94bd8/assets/planet-uranus.svg",
      pra: [
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      ],
      details: {
        rotation_time: "17.2 HOURS",
        revolution_time: "84 YEARS",
        radius: "25,362 KM",
        averageTemp: "-195°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-uranus-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/20da17074a00ee6c5faea503fbf2c5c1de01c482/b871a/assets/geology-uranus.png",
      ],
    },
    {
      planet: "NEPTUNE",
      color: "#2D68F0",
      size: "250px",
      img: "https://d33wubrfki0l68.cloudfront.net/029b9633e9fa948e257c0cf1dd713ce2f224cb1f/91ece/assets/planet-neptune.svg",
      pra: [
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      ],
      details: {
        rotation_time: "16.08 HOURS",
        revolution_time: "164.79 YEARS",
        radius: "24,622 KM",
        averageTemp: "-201°C",
      },
      planetData: [
        "https://fem-planet-facts.netlify.app/assets/planet-neptune-internal.svg",
        "https://d33wubrfki0l68.cloudfront.net/1fb46dee103745be519650e44ffab648541a0510/e5f0d/assets/geology-neptune.png",
      ],
    },
  ]);
  const initialChoose = [
    {
      detail: "OVERVIEW",
      valid: "notValid",
      arr: ["inline-block", "none", "none"],
    },
    {
      detail: "STRUCTURE",
      valid: "notValid",
      arr: ["none", "inline-block", "none"],
    },
    {
      detail: "SURFACE",
      valid: "notValid",
      arr: ["inline-block", "none", "inline-block"],
    },
  ];
  const [pra, setPra] = useState(data[index].pra[0]);
  const [choose, setChoose] = useState([
    {
      detail: "OVERVIEW",
      valid: "valid",
      arr: ["inline-block", "none", "none"],
    },
    {
      detail: "STRUCTURE",
      valid: "notValid",
      arr: ["none", "inline-block", "none"],
    },
    {
      detail: "SURFACE",
      valid: "notValid",
      arr: ["inline-block", "none", "inline-block"],
    },
  ]);
  document.documentElement.style.setProperty(
    "--planet-color",
    data[index].color
  );
  function changeValid(i) {
    let initial = initialChoose;
    let valid = {
      detail: initial[i].detail,
      valid: "valid",
      pramaters: initial[i].pramater,
    };
    initial[i] = valid;
    setChoose(initial);
    setPra(data[index].pra[i]);
  }
  const [thePramater, setThePramater] = useState([
    "inline-block",
    "none",
    "none",
  ]);

  function changePramaters(pramater) {
    setThePramater(pramater);
  }
  return (
    <div className="mainn">
      <div className="d-flex align-items-center justify-content-center figure">
        <div style={{ width: data[index].size }}>
          <img
            src={data[index].img}
            alt=""
            style={{
              display: thePramater[0],

              width: "100%",
            }}
          />
          <img
            src={data[index].planetData[0]}
            alt=""
            style={{
              display: thePramater[1],
              width: "100%",
            }}
          />

          <img
            src={data[index].planetData[1]}
            className="figure2"
            alt="figure2"
            style={{
              display: thePramater[2],
              width: "100px",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              top: "67%",
              left: "50%",
            }}
          />
        </div>
      </div>
      <div className="about">
        <div>
          <h1 className="mb-4" style={{ fontSize: "45px" }}>
            {data[index].planet}
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "Spartan, sans-serif",
              fontSize: "12px",
              lineHeight: "25px",
              marginBottom: "35px",
              height: "90px",
            }}
          >
            {pra}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "Spartan, sans-serif",
              color: "#7A7A89",
              margin: 0,
            }}
          >
            Source :
            <a
              href="https://en.wikipedia.org/wiki/Mercury_%28planet%29"
              target="_blank"
            >
              <b
                style={{
                  fontFamily: "Spartan, sans-serif",
                  color: "#7A7A89",
                }}
              >
                Wikipedia
              </b>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/7161506cc08ae44d2b3d0adead5ed19c0f4806a0/7c131/assets/icon-source.svg"
                alt="Source Icon"
                style={{
                  width: "10px",
                  height: "10px",
                  margin: 0,
                  marginLeft: "3px",
                  marginBottom: "5px",
                }}
              ></img>
            </a>
          </p>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-end  choose h-100"
        style={{ gap: "17px" }}
      >
        {choose.map((el, i) => {
          return (
            <button
              className={el.valid}
              key={i}
              onClick={() => {
                changeValid(i);
                changePramaters(choose[i].arr);
              }}
            >
              <span>0{i + 1}</span>
              {el.detail}
            </button>
          );
        })}
      </div>
      <div>
        <div className="d-flex justify-content-between details">
          <div>
            <div>
              <p>ROTATION TIME</p>
              <h6>{data[index].details.rotation_time}</h6>
            </div>
          </div>
          <div>
            <div>
              <p>REVOLUTION TIME</p>
              <h6>{data[index].details.revolution_time}</h6>
            </div>
          </div>
          <div>
            <div>
              <p>RADIUS</p>
              <h6>{data[index].details.radius}</h6>
            </div>
          </div>
          <div>
            <div>
              <p>AVERAGE TEMP.</p>
              <h6>{data[index].details.averageTemp}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
