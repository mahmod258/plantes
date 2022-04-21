import { useState } from "react";
export function Planets({ toggler, func, cancel }) {
  const [index, setIndex] = useState(0);
  const [planet, setPlanet] = useState([
    { planet: "MERCURY", color: "#DEF4FC" },
    { planet: "VENUS", color: "#F7CC7F" },
    { planet: "EARTH", color: "#545BFE" },
    { planet: "MARS", color: "#FF6A45" },
    { planet: "JUPITER", color: "#ECAD7A" },
    { planet: "SATURN", color: "#FCCB6B" },
    { planet: "URANUS", color: "#65F0D5" },
    { planet: "NEPTUNE", color: "#497EFA" },
  ]);
  setTimeout(func(index), 0);

  return (
    <>
      {toggler === true ? (
        <div className="planets" style={{ display: "none" }}>
          {planet.map((el, i) => {
            if (i === index) {
              return (
                <div
                  className="planet d-flex justify-content-between"
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    cancel();
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="ball d-none"
                      style={{ backgroundColor: el.color }}
                    ></div>
                    <p className="text-white">{el.planet}</p>
                  </div>
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/abcfa269d8f312edbc511ff4f3c89ef29a843235/0a7a7/assets/icon-chevron.svg"
                    alt=""
                    className="d-none"
                    width="5px"
                    height="10px"
                    style={{
                      marginRight: "100px",
                    }}
                  />
                </div>
              );
            } else {
              return (
                <div
                  className="planet d-flex justify-content-between"
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    cancel();
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="ball d-none"
                      style={{ backgroundColor: el.color }}
                    ></div>
                    <p>{el.planet}</p>
                  </div>
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/abcfa269d8f312edbc511ff4f3c89ef29a843235/0a7a7/assets/icon-chevron.svg"
                    alt=""
                    className="d-none"
                    width="5px"
                    height="10px"
                    style={{
                      marginRight: "100px",
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="planets" style={{ display: "flex " }}>
          {planet.map((el, i) => {
            return (
              <div
                className="planet d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                key={planet.indexOf(el)}
                onClick={() => {
                  setIndex(i);
                  cancel();
                }}
              >
                <div className="d-flex">
                  <div
                    className="ball d-none"
                    style={{ backgroundColor: el.color }}
                  ></div>
                  <p>{el.planet}</p>
                </div>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/abcfa269d8f312edbc511ff4f3c89ef29a843235/0a7a7/assets/icon-chevron.svg"
                  alt=""
                  className="d-none"
                  width="5px"
                  height="10px"
                  style={{
                    marginRight: "100px",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
