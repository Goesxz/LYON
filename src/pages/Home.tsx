import { Hero } from "../components/sections/Hero";
import { NextService } from "../components/sections/NextService";
import { About } from "../components/sections/About";
import { Vision } from "../components/sections/Vision";
import { Leadership } from "../components/sections/Leadership";
import { Ministries } from "../components/sections/Ministries";
import { SmallGroups } from "../components/sections/SmallGroups";
import { OnlineChurch } from "../components/sections/OnlineChurch";
import { Events } from "../components/sections/Events";
import { Gallery } from "../components/sections/Gallery";
import { Give } from "../components/sections/Give";
import { VisitUs } from "../components/sections/VisitUs";

export default function Home() {
  return (
    <>
      <Hero />
      <NextService />
      <About />
      <Vision />
      <Leadership />
      <Ministries />
      <SmallGroups />
      <OnlineChurch />
      <Events />
      <Gallery />
      <Give />
      <VisitUs />
    </>
  );
}
