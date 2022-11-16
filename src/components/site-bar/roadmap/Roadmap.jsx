import "./roadmap.scss"

export const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__top d-flex justify-content-between align-items-center">
        <h3 className="roadmap__title">
          Roadmap
        </h3>
        <a className="roadmap__link" href="#view">View</a>
      </div>

      <ul className="roadmap__list">
        <li className="roadmap__item ">
          <p className="roadmap__item-text">Planned</p>
          <span className="roadmap__item-num">2</span>
        </li>

        <li className="roadmap__item ">
          <p className="roadmap__item-text">In-Progress</p>
          <span className="roadmap__item-num">3</span>
        </li>

        <li className="roadmap__item  ">
          <p className="roadmap__item-text">Live</p>
          <span className="roadmap__item-num">1</span>
        </li>
      </ul>
    </div>
  )
}