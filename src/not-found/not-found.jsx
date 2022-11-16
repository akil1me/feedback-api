import notFound from "../assets/img/not-found.png"


export const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="not-found" width={129} height={136} />
      <h2>There is no feedback yet.</h2>
      Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
    </div>
  )
}
