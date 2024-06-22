import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setFeedbacks({
        ...feedbacks,
        good: feedbacks.good + 1,
      });
    } else if (feedbackType === "neutral") {
      setFeedbacks({
        ...feedbacks,
        neutral: feedbacks.neutral + 1,
      });
    } else if (feedbackType === "bad") {
      setFeedbacks({
        ...feedbacks,
        bad: feedbacks.bad + 1,
      });
    }
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivFeedbacks = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positivFeedbacks={positivFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
