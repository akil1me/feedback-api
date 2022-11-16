import { Link } from "react-router-dom"
import "./feedBtn.scss"

export const FeedBtn = (props) => {
  return (
    <>
      {
        !props.link ?
          <button className={`feed-btn ${props.classs} ${props.edit}`} type="submit">
            {props.text}
          </button> :

          <Link className={`feed-btn ${props.classs} ${props.edit} text-white`} to={props.link}>
            {props.text}
          </Link>
      }
    </>

  )
}

