import css from "./Option.module.css";

export default function Options({ onUpdate }) {
  return (
    <div className={css.buttonHolder}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      <button>Reset</button>
    </div>
  );
}
