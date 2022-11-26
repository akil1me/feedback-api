import "./button.scss"

export const Button = ({ type, classs, ...props }) => {

  return (
    <button className={`button ${classs}`} type="button" data-id={type}  {...props}>
      {type}
    </button>
  )
}

