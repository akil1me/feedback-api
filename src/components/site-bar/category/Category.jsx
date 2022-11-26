import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBtn } from "../../../data/filterBtn";
import { feedbacksActions } from "../../../store/feedbacks/feedbacks.slice";
import { Button } from "../../button/";

import "./category.scss";

export const Category = () => {
  const [important, setImportant] = useState(filterBtn)

  const dispath = useDispatch();

  const hendleFilterBtn = (evt) => {
    const findBtn = important.map(item => {
      return item.type === evt.target.dataset.id ? { ...item, classs: item.classs + " b-active" } : { ...item, classs: "" }
    })

    dispath(feedbacksActions.setFilterFeedbackList(evt.target.dataset.id))

    setImportant(findBtn);
  }

  return (
    <div className="category mt-lg-3 mt-0">
      <div className="category__inner row d-flex flex-wrap">
        {
          important.map(btn => <div className="col px-1 mb-3" key={btn.id}>
            {
              <Button onClick={hendleFilterBtn} type={btn.type} classs={btn.classs} />
            }
          </div>)
        }
      </div>
    </div>
  )
}