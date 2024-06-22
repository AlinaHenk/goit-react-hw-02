export default function Feedback({
  feedbacks,
  totalFeedback,
  positivFeedbacks,
}) {
  return (
    <div>
      <p>Good:{feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivFeedbacks}%</p>
    </div>
  );
}
