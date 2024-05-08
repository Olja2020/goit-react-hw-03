import css from "./Feedback.module.css";

function Feedback({ feedback, positiveFeedback, totalFeedback }) {
  return (
    <>
      <ul>
        <li className={css.feedbackResult}>Good: {feedback.good}</li>
        <li className={css.feedbackResult}>Neutral: {feedback.neutral}</li>
        <li className={css.feedbackResult}>Bad: {feedback.bad}</li>
        <li className={css.feedbackResult}>Total: {totalFeedback}</li>
        <li className={css.feedbackResult}>Positive: {positiveFeedback}% </li>
      </ul>
    </>
  );
}

export default Feedback;
