import React from "react";
import Screen from "./screen/Screen";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./awards/Awards";
import Location from "./location/Location";
import Team from "./team/Team";
import Helpyou from "./helpyou/Helpyou";
import Flashdeals from "./flashdeals/Flashdeals";
const Home = () => {
  return (
    <>
      <Screen />
      <Helpyou />
      <Flashdeals />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
    </>
  );
};

export default Home;
