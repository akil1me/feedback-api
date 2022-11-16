import "./container.scss"

export const Container = ({ children, detailePage = "", newFeedBack = "" }) => {
  return <div className={`container ${detailePage} ${newFeedBack}`}>{children}</div>
}