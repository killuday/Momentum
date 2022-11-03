import React from "react";
import Date from "./components/Date";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Weather from "./components/Weather";
function App() {
  return (
    <div >
      <Weather />
      <Time />
      <Date />
      <Quote />
     
    </div>
  );
}

export default App;
