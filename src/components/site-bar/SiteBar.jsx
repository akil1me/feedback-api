import { Category } from "./category/Category";
import { Intro } from "./intro/Intro";
import { Roadmap } from "./roadmap/Roadmap";

import "./siteBar.scss";

export const SiteBar = () => {
  return (
    <>
      <Intro />
      <Category />
      <Roadmap />
    </>
  )
}