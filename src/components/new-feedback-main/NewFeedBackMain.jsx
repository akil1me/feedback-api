
import "./newFeedBackMAin.scss";

import NewFeedBackForm from "../new-feedback-form/NewFeedBackForm";

export default function NewFeedBackMain({ newFeedBackImg, editeFeedBackImg, title, link = {}, onSubmit, hendleDeleteFeedback, ondelete }) {

  const defaultValueInput = link.title;
  const defaultValueText = link.description;
  const defaultValueSelect = link.type;


  return (
    <div className="new-feedback-main">
      <img className="new-feedback-main__img" src={newFeedBackImg || editeFeedBackImg} alt="+" width={56} height={56} />

      <h3 className="new-feedback-main__title">{title}</h3>

      <NewFeedBackForm
        ondelete={ondelete}
        onSubmit={onSubmit}
        defaultValueInput={defaultValueInput}
        defaultValueText={defaultValueText}
        defaultValueSelect={defaultValueSelect}
        hendleDeleteFeedback={hendleDeleteFeedback} />
    </div>
  )
}
