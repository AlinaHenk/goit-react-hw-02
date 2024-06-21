import css from "./Option.module.css";

export default function Options() {
  return (
    <div className={css.buttonHolder}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
}
