import { Button } from "../../button/";

import "./category.scss";

export const Category = () => {
  return (
    <div className="category">
      <div className="category__inner d-flex flex-wrap">
        <Button description="All" classs="b-active mb-3" />
        <Button description="UI" classs="ms-2 mb-3" />
        <Button description="UX" classs="ms-2 mb-3" />
        <Button description="Enhancement" classs=" mb-3" />
        <Button description="Bug" classs="ms-2 mb-3" />
        <Button description="Feature" />
      </div>
    </div>
  )
}