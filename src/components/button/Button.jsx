import "./button.scss"

export const Button = (props) => {
  return (
    <button className={`button ${props.classs}`} type="button">
      {props.description}
    </button>
  )
}

