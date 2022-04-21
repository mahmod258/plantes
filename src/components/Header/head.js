import { Planets } from "./planets";
import { useState } from "react";
export function Head({ func2 }) {
  const [toggler, setToggler] = useState(true);
  const [position, setPosition] = useState("static");
  function toggle() {
    if (position === "static") {
      setTimeout(() => setPosition("fixed"), 0);
    } else if (position === "fixed") {
      setTimeout(() => setPosition("static"), 0);
    }
    setToggler(!toggler);
  }
  const [index, setIndex] = useState(0);

  setTimeout(func2(index), 0);
  function cancel() {
    setToggler(false);
  }
  return (
    <header className="d-flex flex-column " style={{ position: position }}>
      <div className="header-small d-flex justify-content-between align-items-center ">
        <h3>THE PLANETS</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          style={{ cursor: "pointer" }}
          onClick={toggle}
        >
          <g fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"></path>
          </g>
        </svg>
      </div>
      <Planets
        toggler={toggler}
        func={(i) => setTimeout(() => setIndex(i), 0)}
        cancel={cancel}
      />
    </header>
  );
}
