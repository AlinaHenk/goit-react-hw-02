import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";

export default function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
    console.log(feedbacks);
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} />
      <Feedback />
    </>
  );
}
