import { Main, SiteBar, Container } from "../../components/";

import "./suggestions.scss"

const Suggestions = () => {
  return (
    <div className="home">
      <Container>
        <div className="row">
          <div className="col col-lg-3 col-12">
            <SiteBar />
          </div>

          <div className="col col-lg-9 col-12">
            <Main />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Suggestions;