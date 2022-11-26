import { Category } from "./category/Category";
import { Intro } from "./intro/Intro";
import { Roadmap } from "./roadmap/Roadmap";

import "./siteBar.scss";

export const SiteBar = () => {
  return (
    <>
      <div className="row mb-4 mb-lg-0">
        <div className="col">
          <Intro />
        </div>

        <div className="col">
          <Category />
        </div>

        <div className="col">
          <Roadmap />
        </div>
      </div>
    </>
  )
}