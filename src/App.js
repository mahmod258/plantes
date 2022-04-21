import "./style/app.css";
import { Head } from "./components/Header/head";
import { Mainn } from "./components/details/mainn";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="App">
      <Head func2={(i) => setTimeout(() => setIndex(i), 0)} />
      <Mainn index={index} />
    </div>
  );
}

export default App;
