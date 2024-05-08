//import { useState } from "react";
import { useState, useEffect } from "react";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Description from "./description/Description";
import Notification from "./notification/Notification";
export default function App() {
  const getFeedback = () => {
    const savedObject = window.localStorage.getItem("saved-feedback");

    return savedObject != null
      ? JSON.parse(savedObject)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(getFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const resetUseState = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetUseState={resetUseState}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}
