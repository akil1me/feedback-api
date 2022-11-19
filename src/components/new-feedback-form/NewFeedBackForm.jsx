import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../../App"
import { FeedBtn } from "../button/"
import "./newFeedBackForm.scss"

export default function NewFeedBackForm({ defaultValueInput, defaultValueText, defaultValueSelect, onSubmit, hendleDeleteFeedback, ondelete }) {
  const { inputRef, textAreaRef, selectRef } = useContext(AppContext);

  const { id } = useParams();

  const hendleOnSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(inputRef.current.value, textAreaRef.current.value, selectRef.current.value)
  }

  const onDelete = () => {
    hendleDeleteFeedback()
  }

  return (
    <form className='new-feedback-from' onSubmit={hendleOnSubmit}>
      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Feedback Title</h6>
        <p className='new-feedback-from__text'>Add a short, descriptive headline</p>

        <input ref={inputRef} className='form-control' type="text" defaultValue={defaultValueInput} required />
      </div>

      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Category</h6>
        <p className='new-feedback-from__text'>Choose a category for your feedback</p>

        <select ref={selectRef} className="form-select new-feedback-from__select" defaultValue={defaultValueSelect}>
          <option value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>
        </select>
      </div>

      {
        defaultValueInput &&
        <div className="new-feedback-from__box">
          <h6 className='new-feedback-from__title'>Update Status</h6>
          <p className='new-feedback-from__text'>Change feature state</p>

          <select className="form-select new-feedback-from__select" >
            <option value="Planned">Planned</option>
            <option value="Suggestion">Suggestion</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Live">Live</option>
          </select>
        </div>
      }

      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Feedback Detail</h6>
        <p className='new-feedback-from__text'>Include any specific comments on what should be improved, added, etc.</p>

        <textarea ref={textAreaRef} className="form-control" cols="30" rows="3" defaultValue={defaultValueText} required></textarea>
      </div>

      <div className={`${defaultValueInput ? "d-flex justify-content-between" : "d-flex justify-content-end"}`}>
        {
          defaultValueInput &&
          <div>
            <button
              className="new-feedback-from__btn btn btn-danger px-3"
              type="button"
              onClick={onDelete} disabled={ondelete}>
              Delete
              {
                ondelete ? <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span> : null

              }
            </button>
          </div>
        }

        <div>
          <div className="d-inline-block position-relative me-3">
            {
              !defaultValueInput ?
                <FeedBtn link={`/suggestions`} text="Cancel" classs="cancelBtn" />
                :
                <FeedBtn link={`/detail/${id}`} text="Cancel" classs="cancelBtn" />
            }
          </div>
          <FeedBtn text="+ Add Feedback" classs="addBtn" />
        </div>
      </div>
    </form>
  )
}
